import React, { useContext, useEffect, useState } from "react";
import Carrito from "./CarritoXS-MD.js";
import eliminar from "../../img/criss-cross(1).png";
import CamisaContext from "../../context/Camisas/camisaContext.js";
import UbicacionContext from "../../context/ubicacion/ubicacionContext";
import CarritoVacio from "./Carrito_Vacio.js";
const Index = () => {
  const camisacontext = useContext(CamisaContext);
  const {
    camisas,
    EliminarCamisa,
    Incrementar,
    Decrementar,
    variacion,
  } = camisacontext;

  const ubicacioncontext = useContext(UbicacionContext);
  const { Activo7 } = ubicacioncontext;

  const [total, setTotal] = useState(0);

  const Eliminar = (codigo) => {
    EliminarCamisa(codigo);
  };

  useEffect(() => {
    if (camisas) {
      let total = 0;
      let t = camisas.map(
        (camisa) => parseInt(camisa.cantidad) * parseInt(camisa.precio)
      );

      for (let i of t) {
        total += i;
      }
      setTotal(total);
    }
  }, [camisas]);

  useEffect(() => {
    Activo7();

    // eslint-disable-next-line
  }, []);
  const Sumar = (e) => {
    Incrementar(e.target.name);
  };

  const Restar = (e) => {
    Decrementar(e.target.name);
  };

  const OnChange = (e) => {
    variacion(e.target.name, e.target.value);
  };
  return (
    <>
      {camisas.length === 0 ? (
        <CarritoVacio />
      ) : (
        <>
          <h1 className="carrito-nombre">Lista de Pedidos</h1>
          <Carrito />
          <div className="d-none d-lg-block container  contenedor-padre-carrito">
            <div className="contenedor-carrito">
              <table className="table table-carrito">
                <thead>
                  <tr>
                    <th className="text-center" scope="col"></th>
                    <th className="text-center" scope="col">
                      Estilo
                    </th>
                    <th className="text-center" scope="col">
                      Talla
                    </th>
                    <th className="text-center" scope="col">
                      Precio
                    </th>
                    <th className="text-center" scope="col">
                      Cantidad
                    </th>
                    <th className="text-center" scope="col">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {camisas
                    ? camisas.map((camisa) => (
                        <tr key={camisa.id} className="t-carrito">
                          <th className="text-center tr-carrito">
                            <img
                              className="img-carrito-eliminar"
                              src={eliminar}
                              alt=""
                              onClick={() => Eliminar(camisa.id)}
                            />
                          </th>
                          <td className="tr-carrito">
                            <div className="text-center">
                              <img
                                className="img-carrito"
                                src={camisa.imgD}
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-center tr-carrito">
                            {camisa.talla}{" "}
                          </td>
                          <td className="text-center tr-carrito">
                            C${camisa.precio}
                          </td>
                          <td className="text-center tr-carrito">
                            <div className="input-group variacion-cantidad">
                              <div className="input-group-prepend">
                                <input
                                  className="btn btn-outline-primary"
                                  type="button"
                                  value="-"
                                  name={camisa.id}
                                  onClick={Restar}
                                />
                              </div>
                              <input
                                className=" input-cantidad"
                                type="text"
                                name={camisa.id}
                                placeholder="0"
                                value={camisa.cantidad}
                                onChange={OnChange}
                              />
                              <div className="input-group-append mr-2">
                                <input
                                  name={camisa.id}
                                  className="btn btn-outline-primary "
                                  type="button"
                                  value="+"
                                  onClick={Sumar}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="text-center tr-carrito">
                            C$
                            {parseInt(camisa.precio) *
                              parseInt(camisa.cantidad)}
                          </td>
                        </tr>
                      ))
                    : null}
                  <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center total">Total:</td>
                    <td className="text-center total"> C${total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="div-realizar-pedido">
              <input
                type="button"
                value="Realizar Pedidos"
                className="realizar"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
