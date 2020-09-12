import React, { useState } from "react";
import Talla from "./Talla";
import EnvioDevoluciones from "./EnvioDevoluciones";

const Nosotros = () => {
  const [ocultar, setOcultar] = useState(false);
  return (
    <div className="container mt-5">
      <div className="contenedor-frase">
        <h2 className="text-center nosotros-nombre">
          Informacion de Camisa/Talla
        </h2>
        <hr />
        <div className="row text-center">
          <div className="col-xs-12 col-md-3 col-lg-2">
            <h3 className="nosotros-subnombre">Material: </h3>
          </div>
          <div className="col-xs-12 col-md-9 col-lg-10 ">
            <p className="nosotros-frase ">
              50% Poliéster 25% Algodón peinado hilado en anillo 25% Rayón Esta
              tela es increíblemente suave con excelente drapeado, estiramiento
              y recuperación.
            </p>
          </div>
        </div>

        <div className="row text-center mt-3 align-items-center">
          <Talla />
        </div>
      </div>

      <div className="container text-center mb-5">
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#envios"
          hidden={ocultar}
          onClick={() => setOcultar(true)}
        >
          Ver más
        </button>
      </div>

      <div className="contenedor-frase collapse " id="envios">
        <h2 className="text-center nosotros-nombre">Envios/Devoluciones</h2>
        <hr />
        <EnvioDevoluciones />
      </div>

      <div className="container text-center  pb-5">
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#envios"
          hidden={!ocultar}
          onClick={() => setOcultar(false)}
        >
          Ver menos
        </button>
      </div>
    </div>
  );
};

export default Nosotros;
