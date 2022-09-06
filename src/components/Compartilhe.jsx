import React from "react";

function Compartilhe() {
  return (
    <>
      <section className="sessao-compartilhe">
        <div className="container">
          <h2 className="subtitulo text-center fw-700" data-type="detalhe">
            Compartilhe a novidade
          </h2>
          <p className="fw-300 text-center">
            Quer que seus amigos também ganhem a lista personalizada deles?
            Preencha agora!
          </p>
          <div className="form-compartilhe">
            <div>
              <label htmlFor="nome">Nome do seu amigo:</label>
              <input id="nome" type="text" required />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                type="email"
                placeholder="contato@email.com"
                required
              />
            </div>
          </div>
        </div>
        <button className="button">Enviar agora</button>
      </section>
    </>
  );
}

export default Compartilhe;
