// src/components/ComentariosPedagogicos.jsx
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../services/firebase"; // Ajuste o caminho se necessário

export default function ComentariosPedagogicos({ planoId, planoTitulo }) {
  const [formData, setFormData] = useState({ autor: "", turma: "", texto: "" });
  const [estrelas, setEstrelas] = useState(5); // Inicia com 5 estrelas por padrão
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const comentariosRef = collection(db, "diario_de_bordo");

  useEffect(() => {
    if (!planoId) return;

    // Busca apenas os comentários DESTE plano de aula específico
    const q = query(comentariosRef, where("planoId", "==", planoId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const listaComentarios = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Ordenação no Front-end (Evita erros de indexação complexa no Firebase)
      listaComentarios.sort((a, b) => {
        const dataA = a.createdAt?.toMillis() || 0;
        const dataB = b.createdAt?.toMillis() || 0;
        return dataB - dataA; // Do mais recente para o mais antigo
      });

      setComentarios(listaComentarios);
    });

    return () => unsubscribe();
  }, [planoId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdicionarComentario = async (e) => {
    e.preventDefault();
    if (!formData.texto.trim() || !formData.autor.trim()) return;

    setLoading(true);
    try {
      await addDoc(comentariosRef, {
        planoId: planoId, // Vínculo relacional
        planoTitulo: planoTitulo,
        autor: formData.autor,
        turma: formData.turma || "Não informada",
        texto: formData.texto,
        estrelas: estrelas, // Salvando a nota
        createdAt: serverTimestamp(),
      });
      setFormData({ autor: "", turma: "", texto: "" });
      setEstrelas(5);
    } catch (error) {
      console.error("Erro ao salvar: ", error);
      alert("Houve um erro ao salvar o registro pedagógico.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='mt-12 pt-8 border-t-4 border-slate-100 print:hidden'>
      <header className='mb-6'>
        <h3 className='text-2xl font-bold text-slate-800 flex items-center gap-2'>
          <span aria-hidden='true'>📝</span> Avaliação e Diário Docente
        </h3>
        <p className='text-slate-600 mt-1'>
          Como foi aplicar esta missão? Deixe sua avaliação para inspirar outros
          educadores!
        </p>
      </header>

      {/* Formulário */}
      <form
        onSubmit={handleAdicionarComentario}
        className='mb-8 bg-slate-50 p-6 rounded-xl border border-slate-200'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='autor'
              className='font-semibold text-slate-700 text-sm'
            >
              Professor(a) / Mediador(a) *
            </label>
            <input
              type='text'
              id='autor'
              name='autor'
              required
              className='p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none'
              value={formData.autor}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='turma'
              className='font-semibold text-slate-700 text-sm'
            >
              Turma / Escola
            </label>
            <input
              type='text'
              id='turma'
              name='turma'
              className='p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none'
              value={formData.turma}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        </div>

        {/* Sistema de Estrelas */}
        <div className='mb-4'>
          <p className='font-semibold text-slate-700 text-sm block mb-2'>
            Nota da Missão *
          </p>
          <div className='flex gap-2'>
            {[1, 2, 3, 4, 5].map((nota) => (
              <button
                type='button'
                key={nota}
                onClick={() => setEstrelas(nota)}
                className={`text-2xl transition-transform hover:scale-110 ${estrelas >= nota ? "text-amber-400" : "text-slate-300"}`}
                aria-label={`Avaliar com ${nota} estrelas`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label
            htmlFor='texto'
            className='font-semibold text-slate-700 text-sm'
          >
            Relato Pedagógico *
          </label>
          <textarea
            id='texto'
            name='texto'
            rows='3'
            required
            className='p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none'
            placeholder='Quais foram as dificuldades? Os alunos engajaram?'
            value={formData.texto}
            onChange={handleChange}
            disabled={loading}
          />
          <button
            type='submit'
            disabled={
              loading || !formData.texto.trim() || !formData.autor.trim()
            }
            className='self-end mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-colors shadow-sm disabled:opacity-50'
          >
            {loading ? "Salvando..." : "Publicar Avaliação"}
          </button>
        </div>
      </form>

      {/* Lista de Comentários deste Plano */}
      <article aria-live='polite'>
        <h4 className='text-lg font-semibold text-slate-800 mb-4 border-b pb-2'>
          Comentários da Comunidade ({comentarios.length})
        </h4>
        {comentarios.length === 0 ? (
          <p className='text-slate-500 italic p-4 bg-slate-50 rounded-md border border-dashed'>
            Seja o primeiro a avaliar esta missão!
          </p>
        ) : (
          <ul className='space-y-4'>
            {comentarios.map((nota) => (
              <li
                key={nota.id}
                className='p-4 bg-white rounded-lg shadow-sm border border-slate-100'
              >
                <div className='flex justify-between items-start mb-2'>
                  <div>
                    <span className='font-bold text-slate-700 text-sm'>
                      👤 {nota.autor}
                    </span>
                    <span className='ml-2 text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded'>
                      🏷️ {nota.turma}
                    </span>
                  </div>
                  <div className='text-amber-400 text-sm'>
                    {/* Renderiza as estrelas salvas */}
                    {"★".repeat(nota.estrelas)}
                    {"☆".repeat(5 - nota.estrelas)}
                  </div>
                </div>
                <p className='text-slate-700 text-sm mt-2'>{nota.texto}</p>
                <time className='text-xs text-slate-400 block mt-3'>
                  {nota.createdAt
                    ? new Date(nota.createdAt.toDate()).toLocaleDateString(
                        "pt-BR",
                      )
                    : "Agora mesmo"}
                </time>
              </li>
            ))}
          </ul>
        )}
      </article>
    </section>
  );
}
