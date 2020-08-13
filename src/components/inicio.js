import React, { useEffect, useContext } from "react";
import UbicacionContext from "../context/ubicacion/ubicacionContext";
import { Link } from "react-router-dom";
import Nosotros from "./Nosotros/Nosotros";

const Inicio = () => {
  const ubicacioncontext = useContext(UbicacionContext);
  const { Activo1 } = ubicacioncontext;

  useEffect(() => {
    Activo1();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="contenedor-padre">
      <div className="container contenedor-hijo">
        <div className="col-xs-12 col-md-6 text-center justify-content-center">
          <p className="frase">
            Ponte a la Moda y Usa un Estilo Unico. En <span>King of Style</span>{" "}
            Serigrafiamos lo que Tu Mente Imagine
          </p>
          <input type="button" value="Realizar Pedidos" className="pedido" />
        </div>
        <div className="row mt-5">
          <div className="contenedor-frase">
            <h2 className="text-center nosotros-nombre">kings of style</h2>
            <hr />
            <p className="nosotros-frase text-center">
              Somos una Tienda online brindandole una variedad de nuestros
              estilos unicos de camisetas serigrafiadas o personalizada a como
              el cliente lo solicite , Para realizar pedidos de camisetas
              personalizadas o para mayor informacion
              <Link to={"/contacto"}> Contáctenos</Link>
            </p>
          </div>
        </div>
      </div>

      <Nosotros />
    </div>
  );
};

export default Inicio;
