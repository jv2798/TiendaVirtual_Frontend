import React, { useState, useEffect, useContext } from "react";
import logo from "../img/logo4.png";
import carrito from "../img/shopping-cart.png";
import menu from "../img/ui.png";
import AuthContext from "../context/auth/authContext";
import { Link } from "react-router-dom";
import CamisaContext from "../context/Camisas/camisaContext";
import ubicacionContext from "../context/ubicacion/ubicacionContext";
const Header = () => {
  const camisacontext = useContext(CamisaContext);
  const { camisas, GuardandoListaCarrito } = camisacontext;

  const authcontext = useContext(AuthContext);
  const {
    autenticado,
    Recargar_Auth,
    cerrar_sesion,
    Registrar_Usuario,
    Iniciar_Sesion,
  } = authcontext;
  const ubicacioncontext = useContext(ubicacionContext);
  const {
    activo1,
    activo2,
    activo3,
    activo4,
    activo5,
    activo6,
  } = ubicacioncontext;

  const [cantidad, setCantidad] = useState(0);

  //cerrar sesion

  /*window.addEventListener("beforeunload", function (e) {
    // eslint-disable-next-line
    let confirmationMessage = `\o/`;

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    cerrar_sesion();
    return confirmationMessage; //Webkit, Safari, Chrome
  });*/

  //borrar token despues de una hora
  useEffect(() => {
    if (autenticado === "true") {
      setTimeout(() => {
        cerrar_sesion();
      }, 360000);
    }
    // eslint-disable-next-line
  }, [Registrar_Usuario, Iniciar_Sesion]);

  useEffect(() => {
    let v = JSON.parse(localStorage.getItem("carrito"));
    let au = JSON.parse(localStorage.getItem("autenticado"));

    if (v !== null) {
      GuardandoListaCarrito();
    }

    if (au) {
      Recargar_Auth();
    }

    // eslint-disable-next-line
  }, []);

  //useEffect(() => {}, [usuario]);

  useEffect(() => {
    if (camisas) {
      const c = camisas.map((camisa) => parseInt(camisa.cantidad));
      let total = 0;
      for (let i of c) {
        total += i;
      }
      setCantidad(total);
    }
  }, [camisas]);

  const fin_sesion = () => {
    cerrar_sesion();
  };
  return (
    <header className="fixed-top">
      <input type="checkbox" id="btn-menu" />
      <label htmlFor="btn-menu">
        <img className="menu-desplegable" src={menu} alt="" />
      </label>

      <nav className="menu">
        <ul>
          <li>
            <Link className="navlink" to={"/"} name="inicio">
              <img className=" logo" src={logo} alt="" />
            </Link>
          </li>
          <li className="navitem">
            <Link className={`navlink ${activo1}`} to={"/"} name="inicio">
              Inicio
            </Link>
          </li>
          <li className="navitem">
            <Link
              className={`navlink ${activo2}`}
              to={"/hombres"}
              name="caballeros"
            >
              Caballeros
            </Link>
          </li>
          <li className="navitem">
            <Link className={`navlink ${activo3}`} to={"/mujeres"} name="damas">
              Damas
            </Link>
          </li>
          <li className="navitem">
            <Link className={`navlink ${activo4}`} to={"/niños"} name="niños">
              Niños
            </Link>
          </li>

          <div className="ul2">
            {autenticado === "false" ? (
              <>
                <li className="navitem">
                  <Link
                    className={`navlink ${activo5}`}
                    to={"/login"}
                    name="iniciar"
                  >
                    Iniciar Sesión
                  </Link>
                </li>
                <li className="navitem">
                  <Link
                    className={`navlink ${activo6}`}
                    to={"/cuentanueva"}
                    name="registrarse"
                  >
                    Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <li className="navitem">
                <Link
                  className="navlink"
                  to={"/"}
                  onClick={fin_sesion}
                  name="salir"
                >
                  Cerrar Sesión
                </Link>
              </li>
            )}

            <li className="navcarrito">
              <Link className="navlink" to={"/carrito"} name="carrito">
                <div name="carrito">
                  <img src={carrito} alt="Shopping" name="carrito" />
                  <span
                    className="badge badge-pill badge-success"
                    name="carrito"
                  >
                    {cantidad}
                  </span>
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
