import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 no-print">
      <nav>
        <ul className="space-y-4">
          <li><a href="/" className="hover:text-blue-400">Dashboard</a></li>
          <li><a href="/plano/1" className="hover:text-blue-400">Plano Piloto 1</a></li>
          <li><a href="/plano/2" className="hover:text-blue-400">Plano Piloto 2</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;