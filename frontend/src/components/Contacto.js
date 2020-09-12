import React, { useState, useContext } from "react";
import clienteAxios from "../components/config/axios";
import alertContext from "../context/alert/alertContext";
import swal from "sweetalert";
const Contacto = () => {
  const [contador, setContador] = useState(150);
  const [verificar, setVerificar] = useState(true);

  const alertcontext = useContext(alertContext);
  const { Mostrar_Alerta, alerta } = alertcontext;

  const [input, setInput] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [spinner, setSpinner] = useState(false);
  const { correo, telefono, nombre, mensaje } = input;
  //contador de caracteres textarea
  const OnChange = (e) => {
    let inp = [e.target.name];

    if (inp[0] === "mensaje") {
      if (!verificar) {
        setContador(contador + 1);
      } else {
        setContador(contador - 1);
      }
    }

    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      setVerificar(false);
    } else {
      setVerificar(true);
    }
  };

  //enviar mensaje*****************************************************
  const EnviarMensaje = async (e) => {
    e.preventDefault();

    if (correo === "" || telefono === "" || nombre === "" || mensaje === "") {
      return Mostrar_Alerta(
        "Verifique que los campos esten llenos",
        "alert-danger"
      );
    }

    //validar email
    // eslint-disable-next-line

    if (
      // eslint-disable-next-line
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(
        correo
      )
    ) {
    } else {
      return Mostrar_Alerta("El correo no es valido", "alert-danger");
    }

    //validar telefono
    if (telefono.length !== 8) {
      return Mostrar_Alerta(
        "Ingrese un Numero de Télefono Valido",
        "alert-danger"
      );
    }
    let sub = telefono.substring(0, 1);

    if (sub === "2" || sub === "8" || sub === "7" || sub === "5") {
      let datos = input;
      setSpinner(true);
      const resultado = await clienteAxios.post("/api/correo/contacto", datos);
      setSpinner(false);
      //limpiar mensaje
      setInput({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
      });
      //mensaje de enviado

      if (resultado.data.codigo === "rojo") {
        swal(
          "Mensaje NO Enviado",
          "Hubo un problema con el servidor intente mas tarde",
          "error"
        );
      } else {
        swal(
          "Mensaje Enviado",
          "Le responderemos pronto, gracias por contactarno",
          "success"
        );
      }
    } else {
      return Mostrar_Alerta(
        "Ingrese un Numero de Télefono Valido",
        "alert-danger"
      );
    }
  };
  return (
    <div className="contenedor-contacto ">
      <div className="container contenedor-contacto-hijo">
        <div className="contenedor-form ">
          <form>
            <h3 className="nombre-contacto">Contácto</h3>

            <div className="form-group ">
              <label className="atributo">Nombre</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese su Nombre"
                name="nombre"
                onChange={OnChange}
                value={nombre}
              />
            </div>

            <div className="form-group ">
              <label className="atributo">Correo</label>
              <input
                className="form-control"
                type="email"
                placeholder="Ingrese su Correo"
                name="correo"
                onChange={OnChange}
                value={correo}
              />
            </div>

            <div className="form-group ">
              <label className="atributo">Telefono</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese su Telefono"
                name="telefono"
                onChange={OnChange}
                maxLength="8"
                value={telefono}
              />
            </div>

            <div className="form-group ">
              <label className="atributo">Mensaje</label>
              <textarea
                className="form-control textarea"
                type="text"
                placeholder="Ingrese su Mensaje"
                name="mensaje"
                onChange={OnChange}
                onKeyDown={onKeyDown}
                maxLength="150"
                value={mensaje}
              ></textarea>
              <span className="contador">{contador} </span>
            </div>

            {alerta ? (
              <div className="pl-4 pr-4 text-center">
                <div className={`alert ${alerta.categoria}`}>{alerta.msg} </div>
              </div>
            ) : null}
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn btn-primary w-50"
                onClick={EnviarMensaje}
              >
                {spinner ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : null}
                <span> Enviar </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
