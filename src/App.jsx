import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// IMPORTAÇÃO DA NOSSA NOVA PÁGINA
import Catalogo from "./pages/Catalogo";
import PlanoDetalhe from "./pages/PlanoDetalhe";

// Componentes Placeholders restantes (Ainda vamos construir o Dashboard, Sobre e Detalhe)
const Dashboard = () => (
  <div className='p-8'>
    <h1 className='text-3xl font-bold'>Dashboard</h1>
  </div>
);
const Sobre = () => (
  <div className='p-8'>
    <h1 className='text-3xl font-bold'>Expediente</h1>
  </div>
);


export default function App() {
  return (
    <Router>
      <div className='flex h-screen bg-gray-50 font-sans text-gray-900'>
        <Sidebar />
        <main className='flex-1 overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/capitulos/sobre' element={<Sobre />} />

            {/* ROTA ATUALIZADA COM O COMPONENTE REAL */}
            <Route path='/planos' element={<Catalogo />} />

            <Route path='/planos/:id' element={<PlanoDetalhe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
