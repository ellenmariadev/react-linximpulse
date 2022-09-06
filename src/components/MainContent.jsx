import React from "react";

function MainContent() {
  return (
    <>
      <main className="container">
        <div className="sessao-algoritmo">
          <div>
            <h2 className="subtitulo fw-400">
              Ajude o algorítimo a ser mais certeiro
            </h2>
            <div className="algoritmo-texto">
              <p className="paragrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt inventore velit corporis commodi, quae, dolores
                pariatur possimus excepturi sapiente amet quos quisquam optio
                explicabo nulla nobis debitis recusandae animi illum.
                Perspiciatis, quasi et maxime iste facere quisquam omnis nisi
                corrupti animi earum eaque magnam mollitia quae praesentium?
                Modi, iste praesentium.
              </p>
              <p className="paragrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                corporis ipsa provident repellendus hic! Commodi laborum aliquid
                suscipit a. Voluptas voluptates recusandae sequi corrupti
                necessitatibus natus repudiandae excepturi unde saepe.
              </p>
            </div>
          </div>
          <form>
            <div>
              <label htmlFor="nome">Seu nome:</label>
              <input id="nome" type="text" required />
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                type="email"
                placeholder="contato@email.com"
                required
              />
              <p className="mensagem-check"></p>
              <label htmlFor="cpf">CPF:</label>
              <input type="text" required />
              <div className="radio">
                <input type="radio" name="genero" id="masculino" defaultChecked={true} />
                <label htmlFor="masculino" className="label-masc">
                  Masculino
                </label>
                <input type="radio" name="genero" id="feminino" />
                <label htmlFor="feminino">Feminino</label>
              </div>
            </div>
            <button className="button">Enviar</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default MainContent;
