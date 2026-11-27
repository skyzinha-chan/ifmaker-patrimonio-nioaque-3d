import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { doc, setDoc, increment } from "firebase/firestore";
import { db } from "./services/firebase";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VLibrasWidget from "./components/VLibrasWidget";
import OfflineIndicator from "./components/OfflineIndicator";

// Code splitting por rota para reduzir o bundle inicial em conexões móveis/escolares
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Catalogo = lazy(() => import("./pages/Catalogo"));
const Manual = lazy(() => import("./pages/Manual"));
const PlanoDetalhe = lazy(() => import("./pages/PlanoDetalhe"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Autores = lazy(() => import("./pages/Autores"));

function PageLoadingFallback() {
  return (
    <div
      role='status'
      aria-live='polite'
      className='flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-fadeIn'
    >
      <div
        className='w-12 h-12 border-4 border-green-200 border-t-green-700 rounded-full animate-spin mb-4'
        aria-hidden='true'
      />
      <span className='text-sm font-bold text-green-900'>Carregando material pedagógico...</span>
      <span className='sr-only'>Aguarde, carregando conteúdo da página.</span>
    </div>
  );
}

export default function App() {
  // Registra 1 visita por sessão no Firestore para evitar contagem duplicada ao atualizar a página
  useEffect(() => {
    const jaVisitou = sessionStorage.getItem("ifmaker_visita_registrada");
    if (!jaVisitou) {
      sessionStorage.setItem("ifmaker_visita_registrada", "1");
      setDoc(
        doc(db, "metricas_site", "geral"),
        { visitas: increment(1) },
        { merge: true }
      ).catch((err) => console.error("Erro ao registrar visita:", err));
    }
  }, []);

  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900'>
        <Navbar />
        <VLibrasWidget />
        <OfflineIndicator />

        <main className='flex-1 w-full'>
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/capitulos/sobre' element={<Sobre />} />
              <Route path='/manual' element={<Manual />} />
              <Route path='/autores' element={<Autores />} />
              <Route path='/planos' element={<Catalogo />} />
              <Route path='/planos/:id' element={<PlanoDetalhe />} />
            </Routes>
          </Suspense>

          <Footer />
        </main>
      </div>
    </Router>
  );
}
