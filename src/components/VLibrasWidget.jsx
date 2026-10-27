import React, { useEffect } from "react";

/**
 * Widget oficial VLibras para tradução automática de conteúdo em Libras.
 * Injeta o script governamental sob demanda e evita duplicação no DOM.
 */
export default function VLibrasWidget() {
  useEffect(() => {
    if (!document.getElementById("vlibras-script")) {
      const script = document.createElement("script");
      script.id = "vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;

      script.onload = () => {
        if (window.VLibras) {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      };

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div vw="true" className="enabled print:hidden">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
