import React from "react";
import FormMain from "./Forms/FormMain";

function MainContent() {
  return (
    <>
      <main>
        <div style={{paddingTop:"8rem"}} className="container sessao-algoritmo">
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
              <p style={{ marginTop: "1rem" }} className="paragrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                corporis ipsa provident repellendus hic! Commodi laborum aliquid
                suscipit a. Voluptas voluptates recusandae sequi corrupti
                necessitatibus natus repudiandae excepturi unde saepe.
              </p>
            </div>
          </div>
          <FormMain />
        </div>
      </main>
    </>
  );
}

export default MainContent;
