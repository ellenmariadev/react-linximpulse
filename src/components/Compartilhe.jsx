import React from "react";
import { FormCompartilhe } from "./Forms/FormMain";

function Compartilhe() {
  return (
    <>
      <section className="sessao-compartilhe">
        <div style={{marginBottom:"10rem"}} className="container">
            <h2 className="subtitulo text-center fw-700" data-type="detalhe">
              Compartilhe a novidade
            </h2>
            <p className="fw-300 text-center">
              Quer que seus amigos também ganhem a lista personalizada deles?
              Preencha agora!
            </p>
            <FormCompartilhe />
        </div>
      </section>
    </>
  );
}

export default Compartilhe;
