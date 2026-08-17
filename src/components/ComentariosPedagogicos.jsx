// Arquivo: src/components/ComentariosPedagogicos.jsx
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../services/firebase"; // Verifique se o caminho está correto

export default function ComentariosPedagogicos() {
  // 1. Arquitetura Modular: Estado unificado para gerenciar o formulário
  const [formData, setFormData] = useState({
    autor: "",
    turma: "",
    texto: "",
  });
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const comentariosRef = collection(db, "diario_de_bordo");

  // 2. Busca em tempo real no Firestore
  useEffect(() => {
    const q = query(comentariosRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const listaComentarios = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComentarios(listaComentarios);
    });

    return () => unsubscribe();
  }, []);

  // 3. Função limpa para lidar com as mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 4. Inserção no Banco de Dados
  const handleAdicionarComentario = async (e) => {
    e.preventDefault();
    // Validação básica: exige ao menos nome e texto
    if (!formData.texto.trim() || !formData.autor.trim()) return;

    setLoading(true);
    try {
      await addDoc(comentariosRef, {
        autor: formData.autor,
        turma: formData.turma || "Não informada", // Valor padrão caso deixe vazio
        texto: formData.texto,
        createdAt: serverTimestamp(),
      });
      // Reseta o formulário após o sucesso
      setFormData({ autor: "", turma: "", texto: "" });
    } catch (error) {
      console.error("Erro ao salvar comentário: ", error);
      alert("Houve um erro ao salvar o registro pedagógico.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-8'>
      {/* CABEÇALHO */}
      <header className='mb-6 border-b pb-4'>
        <h2 className='text-2xl font-bold text-slate-800 flex items-center gap-2'>
          <span aria-hidden='true'>📖</span> Diário de Bordo Docente
        </h2>
        <p className='text-slate-600 mt-2'>
          Registre as observações da atividade Maker, dificuldades da turma e
          reflexões pedagógicas.
        </p>
      </header>

      {/* FORMULÁRIO: print:hidden acionado para economizar tinta escolar */}
      <form
        onSubmit={handleAdicionarComentario}
        className='mb-8 print:hidden bg-slate-50 p-4 rounded-lg border border-slate-200'
        aria-label='Formulário para adicionar anotação pedagógica'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          {/* Campo: Nome do Professor */}
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
              className='w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors'
              placeholder='Ex: Talita Marques'
              value={formData.autor}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Campo: Turma / Atividade */}
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='turma'
              className='font-semibold text-slate-700 text-sm'
            >
              Turma / Atividade
            </label>
            <input
              type='text'
              id='turma'
              name='turma'
              className='w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors'
              placeholder='Ex: 5º Ano A - Paleontologia'
              value={formData.turma}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        </div>

        {/* Campo: Texto Pedagógico */}
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='texto'
            className='font-semibold text-slate-700 text-sm'
          >
            Anotação Pedagógica *
          </label>
          <textarea
            id='texto'
            name='texto'
            rows='4'
            required
            className='w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none'
            placeholder='Descreva como a turma se saiu com os algoritmos, modelagem 3D ou se houve alguma dificuldade no tabuleiro...'
            value={formData.texto}
            onChange={handleChange}
            disabled={loading}
          />

          <button
            type='submit'
            disabled={
              loading || !formData.texto.trim() || !formData.autor.trim()
            }
            className='self-end mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shadow-sm'
          >
            {loading ? "Salvando..." : "Salvar Registro"}
            <span aria-hidden='true'>💾</span>
          </button>
        </div>
      </form>

      {/* ÁREA DE LEITURA (O DADO PEDAGÓGICO): Fica visível no PDF/Impressão */}
      <article aria-live='polite'>
        <h3 className='text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2'>
          <span aria-hidden='true'>🕰️</span> Histórico de Registros
        </h3>

        {comentarios.length === 0 ? (
          <p className='text-slate-500 italic p-4 bg-slate-50 rounded-md border border-slate-200 border-dashed'>
            Nenhuma anotação pedagógica registrada no banco de dados.
          </p>
        ) : (
          <ul className='space-y-4'>
            {comentarios.map((nota) => (
              <li
                key={nota.id}
                className='p-4 border-l-4 border-emerald-500 bg-white rounded-r-md shadow-sm border-t border-b border-r border-slate-100'
              >
                {/* Metadados da anotação: Professor, Turma e Data */}
                <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-3 border-b border-slate-100 pb-2'>
                  <div className='flex items-center gap-2'>
                    <span className='font-bold text-slate-700 text-sm bg-slate-100 px-2 py-1 rounded'>
                      👤 {nota.autor}
                    </span>
                    {nota.turma !== "Não informada" && (
                      <span className='text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-100'>
                        🏷️ {nota.turma}
                      </span>
                    )}
                  </div>
                  <time className='text-xs text-slate-500 mt-2 md:mt-0 font-medium'>
                    {nota.createdAt
                      ? new Date(nota.createdAt.toDate()).toLocaleString(
                          "pt-BR",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )
                      : "Sincronizando..."}
                  </time>
                </div>

                {/* O Corpo do Comentário */}
                <p className='text-slate-700 whitespace-pre-wrap leading-relaxed text-sm'>
                  {nota.texto}
                </p>
              </li>
            ))}
          </ul>
        )}
      </article>
    </section>
  );
}
