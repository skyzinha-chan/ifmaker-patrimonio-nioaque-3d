import React, { useState, useEffect } from "react";

export default function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      const timer = setTimeout(() => setShowReconnected(false), 4000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setShowReconnected(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline && !showReconnected) {
    return null;
  }

  return (
    <aside
      role='status'
      aria-live='assertive'
      className='fixed bottom-4 left-4 z-50 max-w-sm rounded-xl shadow-2xl p-4 transition-all duration-300 animate-fadeIn text-xs border print:hidden'
      style={{
        backgroundColor: isOffline ? "#fef3c7" : "#ecfdf5",
        borderColor: isOffline ? "#f59e0b" : "#10b981",
        color: isOffline ? "#78350f" : "#065f46",
      }}
    >
      <div className='flex items-start gap-3'>
        <span className='text-lg' aria-hidden='true'>
          {isOffline ? "📶" : "✅"}
        </span>
        <div>
          <strong className='font-bold block'>
            {isOffline ? "Modo Offline Ativo (PWA)" : "Conexão Restabelecida"}
          </strong>
          <p className='mt-0.5 leading-relaxed'>
            {isOffline
              ? "Sem sinal de internet na escola? Sem problemas! Todos os roteiros, checklists e conteúdos do manual continuam salvos e funcionando offline."
              : "Sua conexão com a internet retornou. Os comentários e métricas em nuvem foram sincronizados."}
          </p>
        </div>
      </div>
    </aside>
  );
}

