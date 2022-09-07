import React from "react";
import { Produto } from "./Produto";
import { ProdutoGrid } from "./ProdutoGrid";

const Fetch = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    fetch(
      `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    )
      .then((res) => res.json())
      .then((json) => setData([...data, ...json.products]));
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  if (!data) return null;

  const produto = data.map((product, index) => {
    return <Produto key={index} product={product} />;
  });

  return (
    <div>
      <ProdutoGrid>{produto}</ProdutoGrid>
      <section className="sessao-produtos">
        <button onClick={loadMore} data-type="btnprodutos" className="button">
          Ainda mais produtos aqui!
        </button>
      </section>
    </div>
  );
};

export default Fetch;
