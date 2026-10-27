import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db, auth } from "../services/firebase";

/**
 * Seção de relatos pedagógicos e avaliações docentes integrada ao Firestore,
 * com suporte a moderação autenticada via Firebase Auth e conformidade LGPD.
 */
export default function ComentariosPedagogicos({ planoId, planoTitulo }) {
  const [formData, setFormData] = useState({ autor: "", turma: "", texto: "" });
  const [estrelas, setEstrelas] = useState(5);
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const [consentimentoLGPD, setConsentimentoLGPD] = useState(false);
  const [erroLGPD, setErroLGPD] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const comentariosRef = collection(db, "diario_de_bordo");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdmin(Boolean(user));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!planoId) return;

    const q = query(comentariosRef, where("planoId", "==", planoId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const listaComentarios = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Ordenação decrescente em memória para dispensar índice composto no Firestore
      listaComentarios.sort((a, b) => {
        const dataA = a.createdAt?.toMillis() || 0;
        const dataB = b.createdAt?.toMillis() || 0;
        return dataB - dataA;
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

    if (!consentimentoLGPD) {
      setErroLGPD(true);
      return;
    }

    setLoading(true);
    try {
      await addDoc(comentariosRef, {
        planoId,
        planoTitulo,
        autor: formData.autor,
        turma: formData.turma || "Não informada",
        texto: formData.texto,
        estrelas,
        consentimentoLGPD: true,
        lgpdVersao: "1.0",
        createdAt: serverTimestamp(),
      });
      setFormData({ autor: "", turma: "", texto: "" });
      setEstrelas(5);
      setConsentimentoLGPD(false);
      setErroLGPD(false);
    } catch (error) {
      console.error("Erro ao salvar: ", error);
      alert("Houve um erro ao salvar o registro pedagógico.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleAdmin = async () => {
    if (isAdmin) {
      await signOut(auth);
      alert("🔒 Modo Administrador desativado.");
      return;
    }

    const email = window.prompt("Acesso Restrito: E-mail de Moderação");
    if (!email) return;
    const senha = window.prompt("Senha de Acesso");
    if (!senha) return;

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert("✅ Bem-vindo! Acesso autorizado pelo servidor.");
    } catch (error) {
      alert("❌ Credenciais inválidas ou acesso negado.");
    }
  };

  const handleDeletar = async (idDoComentario) => {
    const confirmacao = window.confirm(
      "⚠️ Apagar definitivamente este comentário?",
    );
    if (confirmacao) {
      try {
        await deleteDoc(doc(db, "diario_de_bordo", idDoComentario));
      } catch (error) {
        console.error("Erro ao deletar:", error);
        alert("Erro de permissão: Você não tem direitos para apagar.");
      }
    }
  };

  const handleEditar = async (idDoComentario, textoAtual) => {
    const novoTexto = window.prompt("Editar o relato:", textoAtual);
    if (
      novoTexto !== null &&
      novoTexto.trim() !== "" &&
      novoTexto !== textoAtual
    ) {
      try {
        await updateDoc(doc(db, "diario_de_bordo", idDoComentario), {
          texto: novoTexto,
        });
      } catch (error) {
        console.error("Erro ao editar:", error);
        alert("Erro de permissão: Acesso negado.");
      }
    }
  };

  return (
    <section className='mt-12 pt-8 border-t-4 border-slate-100 print:hidden'>
      <header className='mb-6 flex justify-between items-start'>
        <div>
          <h3 className='text-2xl font-bold text-slate-800 flex items-center gap-2'>
            <span
              aria-hidden='true'
              onClick={handleToggleAdmin}
              className='cursor-pointer hover:scale-110 transition-transform'
              title='Acesso da Coordenação'
            >
              {isAdmin ? "🔓" : "📝"}
            </span>
            Avaliação e Diário Docente
          </h3>
          <p className='text-slate-600 mt-1'>
            Como foi aplicar esta missão? Deixe sua avaliação para inspirar
            outros educadores!
          </p>
        </div>
        {isAdmin && (
          <span className='bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-200'>
            Modo Admin Ativo
          </span>
        )}
      </header>

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
          {/* Aviso de Privacidade e Minimização de Dados (LGPD) */}
          <div
            id='aviso-lgpd-docente'
            className='mt-3 p-4 bg-sky-50/80 border border-sky-200 rounded-xl text-xs text-slate-700 space-y-2'
          >
            <div className='flex items-center gap-1.5 font-bold text-sky-900'>
              <span aria-hidden='true'>🛡️</span>
              <span>Aviso de Privacidade Pedagógica e LGPD (Lei nº 13.709/2018)</span>
            </div>
            <p className='leading-relaxed text-slate-600'>
              <strong>Finalidade e Compartilhamento:</strong> Este diário é público e formativo, servindo para registrar adaptações práticas e inspirar outros educadores da rede.
            </p>
            <p className='leading-relaxed text-slate-600'>
              <strong>Minimização de Dados (Proteção Integral à Criança):</strong> Não cite nomes completos de estudantes, informações particulares ou dados que identifiquem nominalmente os menores. Relate a experiência através dos esquadrões ou da turma como um todo.
            </p>

            <div className='pt-2 border-t border-sky-200/60'>
              <label
                htmlFor='consentimento-lgpd'
                className={`flex items-start gap-2.5 cursor-pointer font-medium select-none ${
                  erroLGPD ? "text-red-700 font-bold" : "text-slate-800"
                }`}
              >
                <input
                  type='checkbox'
                  id='consentimento-lgpd'
                  checked={consentimentoLGPD}
                  onChange={(e) => {
                    setConsentimentoLGPD(e.target.checked);
                    if (e.target.checked) setErroLGPD(false);
                  }}
                  disabled={loading}
                  aria-describedby='aviso-lgpd-docente'
                  className='mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                />
                <span>
                  Declaro que este relato não identifica nominalmente estudantes e autorizo a publicação colaborativa para fins pedagógicos. *
                </span>
              </label>
              {erroLGPD && (
                <p role='alert' className='mt-1 text-xs font-bold text-red-600 flex items-center gap-1'>
                  ⚠️ É necessário concordar com as diretrizes de privacidade e proteção de dados para publicar seu relato.
                </p>
              )}
            </div>
          </div>

          <button
            type='submit'
            disabled={
              loading ||
              !formData.texto.trim() ||
              !formData.autor.trim() ||
              !consentimentoLGPD
            }
            className='self-end mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-md transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm'
          >
            {loading ? "Salvando..." : "Publicar Avaliação"}
          </button>
        </div>
      </form>

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
                className='p-4 bg-white rounded-lg shadow-sm border border-slate-100 relative group'
              >
                {isAdmin && (
                  <div className='absolute top-4 right-4 flex gap-2'>
                    <button
                      onClick={() => handleEditar(nota.id, nota.texto)}
                      className='text-slate-400 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 p-1.5 rounded transition-colors'
                      title='Editar Comentário'
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDeletar(nota.id)}
                      className='text-slate-400 hover:text-red-600 bg-slate-50 hover:bg-red-50 p-1.5 rounded transition-colors'
                      title='Apagar Comentário'
                    >
                      🗑️
                    </button>
                  </div>
                )}
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
