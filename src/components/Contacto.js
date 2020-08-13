import React, { useState } from "react";

const Contacto = () => {
  const [contador, setContador] = useState(150);
  const [verificar, setVerificar] = useState(true);

  const [input, setInput] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

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
    if (e.keyCode === 8) {
      setVerificar(false);
    } else {
      setVerificar(true);
    }
  };

  return (
    <div className="contenedor-contacto ">
      <div className="container contenedor-contacto-hijo">
        <div className="contenedor-form">
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
              ></textarea>
              <span className="contador">{contador} </span>
            </div>

            <div className="form-group text-center">
              <input
                type="submit"
                className="btn btn-primary w-50"
                value="Enviar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
