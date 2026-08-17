import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes Globais
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Páginas (Views)
import Dashboard from "./pages/Dashboard";
import Catalogo from "./pages/Catalogo";
import PlanoDetalhe from "./pages/PlanoDetalhe";
import Sobre from "./pages/Sobre";
import Autores from "./pages/Autores";


export default function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900'>
        <Navbar />
        {/* Área de Conteúdo Principal */}
        <main className='flex-1 w-full'>
          {/* As rotas ocupam o espaço necessário e empurram o footer pro final */}
          
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/capitulos/sobre' element={<Sobre />} />
              <Route path='/autores' element={<Autores />} />
              <Route path='/planos' element={<Catalogo />} />
              <Route path='/planos/:id' element={<PlanoDetalhe />} />
            </Routes>          

          {/* O Rodapé Global aparece em todas as páginas */}
          <Footer />
        </main>
      </div>
    </Router>
  );
}
