import React from "react";

export const Produto = ({ product }) => (
    <div className="produto">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="paragrafo">{product.description}</p>
      <h4 className="fw-400">
        De: <strike>R$ {product.oldPrice},00</strike>
      </h4>
      <span>
        Por: <strong>R$ {product.price},00</strong>
      </span>
      <h4 className="fw-400">
        ou {product.installments.count}x de R$ {product.installments.value}
      </h4>
      <button className="button">Comprar</button>
    </div>
);
