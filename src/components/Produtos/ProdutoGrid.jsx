import React from "react";

export const ProdutoGrid = ({ children }) => {
  return (
    <section id="produtos" className="sessao-produtos">
      <div className="container">
        <h2 className="subtitulo fw-400 text-center" data-type="detalhe">
          Sua seleção especial
        </h2>
        <div style={{marginTop: "5rem"}} className="produtos">{children}</div>
      </div>
    </section>
  );
};
