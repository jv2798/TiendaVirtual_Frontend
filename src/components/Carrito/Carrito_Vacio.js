import React from "react";
import carrito from "../../img/add-to-cart.png";
import { Link } from "react-router-dom";

const Carrito_Vacio = () => {
  return (
    <div className="div-carrito-vacio">
      <div className="div-img-vacio mb-3">
        <img className="img-carrito-vacio img-fluid" src={carrito} alt="" />
      </div>

      <div className="div-detalle-vacio">
        <h1 className="titulo-vacio">SU CARRITO ESTA VACIO</h1>
        <div className="div-info mt-4 mb-2">
          <p className="infor-vacio">
            Antes de Proceder a Realizar su pedido, debe de agregar algunos
            productos a su carrito de compra. Encontrara muchos estilos de
            nuestro producto en nuestra página
          </p>
        </div>
        <Link className="btn btn-primary " to={"/hombres"}>
          INICIAR COMPRA
        </Link>
      </div>
    </div>
  );
};

export default Carrito_Vacio;
