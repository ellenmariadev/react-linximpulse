import React from "react";

export const ProdutoGrid = ({ children }) => {
  return (
    <section className="sessao-produtos">
      <div className="container">
        <h2 className="subtitulo fw-400 text-center" data-type="detalhe">
          Sua seleção especial
        </h2>
        <div className="produtos">{children}</div>
      </div>
    </section>
  );
};
