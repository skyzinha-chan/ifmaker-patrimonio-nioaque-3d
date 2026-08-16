import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <h2 className="text-2xl font-bold">Bem-vindo ao Guia Prático</h2>
          <p className="mt-4">Selecione um módulo no menu lateral para começar.</p>
        </main>
      </div>
    </div>
  );
}

export default App;