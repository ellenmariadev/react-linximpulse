import React from "react";
import { Produto } from "./Produto";
import { ProdutoGrid } from "./ProdutoGrid";

export function Produtos(props) {
  return (
    <>
      <ProdutoGrid>
        {props.products.map((product) => (
          <Produto key={product.id} product={product} />
        ))}
      </ProdutoGrid>
    </>
  );
}
