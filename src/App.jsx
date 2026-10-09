import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes Globais
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VLibrasWidget from "./components/VLibrasWidget";
import OfflineIndicator from "./components/OfflineIndicator";

// Carregamento sob Demanda (Code Splitting / Lazy Loading)
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Catalogo = lazy(() => import("./pages/Catalogo"));
const Manual = lazy(() => import("./pages/Manual"));
const PlanoDetalhe = lazy(() => import("./pages/PlanoDetalhe"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Autores = lazy(() => import("./pages/Autores"));

// Indicador de Carregamento Acessível para Conexões Escolares (3G/4G)
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
  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900'>
        <Navbar />

        {/* Injeção do Widget de Acessibilidade Global */}
        <VLibrasWidget />

        {/* Indicador de Conexão Offline/Online (PWA) */}
        <OfflineIndicator />
        
        {/* Área de Conteúdo Principal com Carregamento sob Demanda */}
        <main className='flex-1 w-full'>
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/capitulos/sobre' element={<Sobre />} />
              <Route path='/manual' element={<Manual />} />
              <Route path='/autores' element={<Autores />} />
              <Route path='/planos' element={<Catalogo />} />
              <Route path='/planos/:id' element={<PlanoDetalhe />} />
            </Routes>
          </Suspense>

          {/* O Rodapé Global aparece em todas as páginas */}
          <Footer />
        </main>
      </div>
    </Router>
  );
}
