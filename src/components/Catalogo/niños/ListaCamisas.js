import React from "react";
import { Link } from "react-router-dom";
import carrito from "../../../img/shopping-cart.png";
const ListaCamisas = ({ camisa }) => {
  const onclick = (camisa) => {
    localStorage.setItem("camisa", JSON.stringify(camisa));
  };
  return (
    <div className="col-xs-12 col-md-6 col-lg-4  mb-5 ">
      <div className="card card-camisas">
        <img className="card-img-top img-men " src={camisa.ruta} alt="" />

        <div className="card-body">
          <div className="cardText">
            <p className="card-text">Precio: C${camisa.precio} </p>
          </div>
          <div className="ocultar-pequeños d-xs-block d-lg-none">
            <Link
              className="card-title link-carrito"
              to={`/detalle`}
              onClick={() => onclick(camisa)}
            >
              <img src={carrito} alt="" /> Añadir al Carrito
            </Link>
          </div>
          <div className="ocultar d-none d-lg-block">
            <Link
              className="card-title link-carrito"
              to={`/detalle`}
              onClick={() => onclick(camisa)}
            >
              <img src={carrito} alt="" /> Añadir al Carrito
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaCamisas;
