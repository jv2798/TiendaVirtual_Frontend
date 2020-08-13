import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext.js";
import UbicacionContext from "../../context/ubicacion/ubicacionContext";
import AlertContext from "../../context/alert/alertContext.js";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  const alertcontext = useContext(AlertContext);
  const { alerta, Mostrar_Alerta } = alertcontext;

  const authcontext = useContext(AuthContext);
  const { Registrar_Usuario } = authcontext;

  const ubicacioncontext = useContext(UbicacionContext);
  const { Activo6 } = ubicacioncontext;

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    contraseña: "",
    repite: "",
  });

  const { nombre, apellido, telefono, correo, contraseña, repite } = datos;

  const onChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    //comprobar que no este vacio
    if (
      nombre === "" ||
      apellido === "" ||
      telefono === "" ||
      correo === "" ||
      contraseña === "" ||
      repite === ""
    ) {
      Mostrar_Alerta("Verifique que los campos esten llenos", "alert-danger");
      return;
    }

    //validar password
    if (contraseña.length < 6) {
      Mostrar_Alerta(
        "Contraseña muy corta minimo 6 caracteres",
        "alert-danger"
      );
      return;
    }

    //ver si son iguales las contraseña
    if (contraseña !== repite) {
      Mostrar_Alerta(
        "las contraseña son distintas, verifique que sean iguales",
        "alert-danger"
      );
      return;
    }

    //registrar usuario
    Registrar_Usuario({
      nombre,
      apellido,
      telefono,
      correo,
      contraseña,
    });

    Mostrar_Alerta("Registro Completado", "alert-success");
  };

  useEffect(() => {
    Activo6();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="contenedor-signup">
      <form>
        <h2 className="nombre-sign pt-4">Sign Up</h2>

        <div className="row form-group pt-4 pl-4 pr-4">
          <div className="col-xs-12 col-md-6">
            <label className="atributo"> Nombre</label>
            <input
              className="form-control"
              type="text"
              placeholder=" Ingrese su Nombre"
              name="nombre"
              onChange={onChange}
              required
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <label className="atributo">Apellido</label>
            <input
              className="form-control"
              type="text"
              placeholder=" Ingrese su Apellido"
              name="apellido"
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="form-group pl-4 pr-4">
          <label className="atributo">Telefono</label>
          <input
            className="form-control"
            type="text"
            placeholder=" Ingrese su Telefono"
            name="telefono"
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group pl-4 pr-4">
          <label className="atributo"> Correo</label>
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
          <label className="atributo">Contraseña</label>
          <input
            className="form-control "
            type="password"
            placeholder="Ingrese su Password"
            name="contraseña"
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group pl-4 pr-4">
          <label className="atributo">Repita Contraseña</label>
          <input
            className="form-control"
            type="password"
            placeholder="Repita su Password"
            name="repite"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group pl-4">
          <Link className="link" to={"/login"}>
            Login
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
            value="Registrarse"
            onClick={onClick}
          />
        </div>
      </form>
    </div>
  );
};

export default NuevaCuenta;
