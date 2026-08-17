import React, { useEffect } from "react";

export default function VLibrasWidget() {
  useEffect(() => {
    // Verificação para evitar que o script seja injetado múltiplas vezes 
    // caso o React faça um re-render natural do ciclo de vida.
    if (!document.getElementById("vlibras-script")) {
      const script = document.createElement("script");
      script.id = "vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true; // Carrega em segundo plano sem travar a tela
      
      // Assim que o script terminar de baixar, inicializamos o Widget
      script.onload = () => {
        if (window.VLibras) {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      };
      
      document.body.appendChild(script);
    }
  }, []); // Array de dependências vazio garante que rode apenas uma vez na montagem

  return (
    // 'print:hidden' (Tailwind) garante que o widget de Libras desapareça 
    // automaticamente se o usuário tentar imprimir a página em PDF ou papel.
    <div vw="true" className="enabled print:hidden">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}