import React from 'react';

const Header = () => {
  const handlePrint = () => window.print();
  
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center no-print">
      <h1 className="text-xl font-bold text-gray-800">IFMaker Educador</h1>
      <button 
        onClick={handlePrint}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Imprimir Plano
      </button>
    </header>
  );
};

export default Header;