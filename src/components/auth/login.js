import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext.js";
import UbicacionContext from "../../context/ubicacion/ubicacionContext";
import { Link } from "react-router-dom";
const Login = () => {
  const alertcontext = useContext(AlertContext);
  const { alerta, Mostrar_Alerta } = alertcontext;

  const ubicacioncontext = useContext(UbicacionContext);
  const { Activo5 } = ubicacioncontext;

  const [datos, setDatos] = useState({
    correo: "",
    contraseña: "",
  });

  const onChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const { correo, contraseña } = datos;
  const onsubmit = (e) => {
    e.preventDefault();
    if (correo === "" || contraseña === "") {
      Mostrar_Alerta("Verifique que los campos esten llenos", "alert-danger");
    } else {
      Mostrar_Alerta("Sesion Iniciada Correctamente", "alert-success");
    }
  };

  useEffect(() => {
    Activo5();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="contenedor-signIn">
      <form>
        <h2 className="nombre-sign pt-4">Login</h2>

        <div className="form-group pt-2 pl-4 pr-4">
          <label className="atributo">Correo </label>
          <input
            className="form-control"
            type="email"
            placeholder="Ingrese su Correo"
            name="correo"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group pl-4 pr-4">
          <label className="atributo">Contraseña </label>
          <input
            className="form-control "
            type="password"
            placeholder=" Ingrese su Password"
            name="contraseña"
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group pl-4">
          <Link className="link" to={"/cuentanueva"}>
            Sign Up
          </Link>
        </div>

        {alerta ? (
          <div className="pl-4 pr-4 text-center">
            <div className={`alert ${alerta.categoria}`}>{alerta.msg} </div>
          </div>
        ) : null}

        <div className="form-group text-center">
          <input
            className="btn btn-primary w-50"
            type="submit"
            value="Iniciar Sesión"
            onClick={onsubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
