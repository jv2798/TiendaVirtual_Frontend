import React, { useState, useEffect, useContext } from "react";
import logo from "../img/logo4.png";
import carrito from "../img/shopping-cart.png";
import menu from "../img/ui.png";
import { MDBNavbar } from "mdbreact";
import { Link } from "react-router-dom";
import CamisaContext from "../context/Camisas/camisaContext";
import ubicacionContext from "../context/ubicacion/ubicacionContext";
const Header = () => {
  const camisacontext = useContext(CamisaContext);
  const { camisas, GuardandoListaCarrito } = camisacontext;

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

  useEffect(() => {
    let v = JSON.parse(localStorage.getItem("carrito"));
    if (v !== null) {
      GuardandoListaCarrito();
    }
    // eslint-disable-next-line
  }, []);

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

  return (
    <MDBNavbar className="navbar" bg="dark" fixed="top" expand="lg" scrolling>
      <a className="navbar-brand" href="/#">
        <img className=" logo" src={logo} alt="Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <img src={menu} alt="" />
        </span>
      </button>

      <div className="collapse  navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className={`nav-link ${activo1}`} to={"/"} name="inicio">
              Inicio
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className={`nav-link ${activo2}`}
              to={"/hombres"}
              name="caballeros"
            >
              Caballeros
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activo3}`}
              to={"/mujeres"}
              name="damas"
            >
              Damas
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activo4}`} to={"/niños"} name="niños">
              Niños
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${activo5}`}
              to={"/login"}
              name="iniciar"
            >
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activo6}`}
              to={"/cuentanueva"}
              name="registrarse"
            >
              Sign Up
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/#" name="salir">
              Log Out
            </a>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={"/carrito"} name="carrito">
              <div name="carrito">
                <img src={carrito} alt="Shopping" name="carrito" />
                <span className="badge badge-pill badge-success" name="carrito">
                  {cantidad}
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </MDBNavbar>
  );
};

export default Header;
