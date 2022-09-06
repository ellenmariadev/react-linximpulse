import React from "react";
import { Produtos } from "./Produtos";

const Fetch = () => {
  const [data, setData] = React.useState();
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    fetch(
      `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    )
      .then((res) => res.json())
      .then((item) => setData(item));
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  if (!data) return null;

  return (
    <div>
      <Produtos products={data.products} />;
      <section className="sessao-produtos">
        <button onClick={loadMore} data-type="btnprodutos" className="button">
          Ainda mais produtos aqui!
        </button>
      </section>
    </div>
  );
};

export default Fetch;
