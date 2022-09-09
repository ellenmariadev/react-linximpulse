import React from "react";

function Header() {
  return (
    <>
      <header>
        <p className="color-05">uma seleção de produtos</p>
        <h1 className="titulo">especial para você</h1>
        <p>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
        <div className="btn-header">
          <button className="button" data-type="amarelo">
            Conheça a Linx
          </button>
          <button className="button">Ajude o algorítimo</button>
          <a href="#produtos" className="button" data-type="amarelo">
            Seus produtos
          </a>
          <a href="#compartilhe" className="button">Compartilhe</a>
        </div>
      </header>
    </>
  );
}

export default Header;
