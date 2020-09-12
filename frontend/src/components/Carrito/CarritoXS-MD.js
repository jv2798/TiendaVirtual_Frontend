import React, { useContext, useEffect, useState } from "react";
import eliminar from "../../img/criss-cross(1).png";
import CamisaContext from "../../context/Camisas/camisaContext.js";
import autContext from "../../context/auth/authContext";
import swal from "sweetalert";

const ListadoCarrito = () => {
  const camisacontext = useContext(CamisaContext);
  const {
    camisas,
    EliminarCamisa,
    Incrementar,
    Decrementar,
    variacion,
    RealizarCompra,
    ELiminar_Despues_Compra,
  } = camisacontext;

  //datos del usuario
  const authcontext = useContext(autContext);
  const { usuario, autenticado } = authcontext;

  //valores del usuario
  const { correo, nombre, apellido, telefono } = usuario;

  const [total, setTotal] = useState(0);
  const [verificar, setVerificar] = useState(true);

  const Eliminar = (codigo) => {
    EliminarCamisa(codigo);
  };

  //carga la lista de pedido
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

  const Sumar = (e) => {
    Incrementar(e.target.name);
  };

  const Restar = (e) => {
    Decrementar(e.target.name);
  };

  const OnChange = (e) => {
    if (
      (parseInt(e.target.value) <= 1000 && Number(e.target.value)) ||
      !verificar
    ) {
      variacion(e.target.name, e.target.value);
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      setVerificar(false);
    } else {
      setVerificar(true);
    }
  };

  //Realizar pedido
  const RealizarPedido = () => {
    if (autenticado === "false") {
      swal(
        "Debe de Iniciar sesion o Registrarse para Continuar",
        "Su carrito de Compra no se vera afectado",
        "error"
      );
    } else {
      swal({
        title: "Desea Realizar el Pedido?",
        text: "Verifique su pedido antes de solicitarlo",
        icon: "warning",
        buttons: ["Cancelar", "Solicitar"],
      }).then((realizar) => {
        if (realizar) {
          swal("Pedido Realizado Correctamente", { icon: "success" });

          let nombreC = nombre + " " + apellido;
          RealizarCompra({ correo, camisas, total, telefono, nombreC });
          ELiminar_Despues_Compra();
        } else {
          swal("Continue con su Compra!!", {
            icon: "info",
          });
        }
      });
    }
  };
  return (
    <div className="container d-xs-block d-lg-none">
      <div className=" row contenedor-carrito2">
        {camisas
          ? camisas.map((camisa) => (
              <div key={camisa.id} className=" col-xs-12 col-md-6 cont">
                <div className="div-carrito">
                  <div className="pb-2 btn-eliminar">
                    <img
                      className="img-carrito-eliminar"
                      src={eliminar}
                      alt=""
                      onClick={() => Eliminar(camisa.id)}
                    />
                  </div>

                  <div className="cart-imagen mb-2">
                    <img className="img-carrito" src={camisa.imgD} alt="" />
                  </div>

                  <div className="cart-detalles">
                    Talla:
                    <span className="tipo"> {camisa.talla} </span>
                  </div>

                  <div className="cart-detalles">
                    Precio: <span className="tipo">C${camisa.precio}</span>
                  </div>

                  <div className="cart-detalles">
                    <table>
                      <tbody>
                        <tr>
                          <td> Cantidad:</td>
                          <td>
                            {" "}
                            <div className="input-group ">
                              <div className="input-group-prepend v2">
                                <input
                                  className="btn btn-outline-primary"
                                  type="button"
                                  value="-"
                                  name={camisa.id}
                                  onClick={Restar}
                                />
                              </div>
                              <input
                                className=" input-cantidad2"
                                type="text"
                                name={camisa.id}
                                placeholder="0"
                                value={camisa.cantidad}
                                onChange={OnChange}
                                onKeyDown={onKeyDown}
                              />
                              <div className="input-group-append mr-2 v2">
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
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="cart-detalles">
                    SubTotal:
                    <span className="tipo">
                      C${parseInt(camisa.precio) * parseInt(camisa.cantidad)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="row total2 mt-5">
        <p>
          {" "}
          Total: <span> C${total} </span>
        </p>
      </div>
      <hr className="hr-total" />

      <div className="text-center">
        <input
          type="button"
          value="Realizar Pedidos"
          className="realizar2"
          onClick={RealizarPedido}
        />
      </div>
    </div>
  );
};

export default ListadoCarrito;
