import React, { useState, useEffect, useContext } from "react";
import CamisaContext from "../../context/Camisas/camisaContext";
import UbicacionContext from "../../context/ubicacion/ubicacionContext";
import AlertaContext from "../../context/alert/alertContext";
import { v4 as uuidv4 } from "uuid";

const DetalleCamisa = () => {
  const alertacontext = useContext(AlertaContext);
  const { alerta, Mostrar_Alerta } = alertacontext;

  const camisacontext = useContext(CamisaContext);
  const { AñadirCarrito, ModificarCamisa, camisas } = camisacontext;

  const ubicacioncontext = useContext(UbicacionContext);
  const { Activo3, Activo2, Activo4 } = ubicacioncontext;

  const [imgD, setImgD] = useState("");
  const [precio, setPrecio] = useState("");
  const [color, setColor] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [talla, setTalla] = useState("");
  const [codigo, setCodigo] = useState("");
  const [activo1, setActivo1] = useState("false");
  const [activo2, setActivo2] = useState("false");
  const [activo3, setActivo3] = useState("false");
  const [activo4, setActivo4] = useState("false");
  const [verificar, setVerificar] = useState(true);
  useEffect(() => {
    const Imagen = () => {
      let camisa = JSON.parse(localStorage.getItem("camisa"));

      const { ruta, color, precio, codigo } = camisa;

      setImgD(ruta);
      setColor(color);
      setPrecio(precio);
      setCodigo(codigo);

      let sb = codigo.substring(0, 1);
      if (sb === "M") {
        Activo2();
      }
      if (sb === "w") {
        Activo3();
      }
      if (sb === "k") {
        Activo4();
      }
    };

    Imagen();
    // eslint-disable-next-line
  }, []);

  const Incrementar = (e) => {
    setCantidad(cantidad + 1);
  };

  const Decrementar = (e) => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const OnChange = (e) => {
    if (
      !verificar ||
      (Number(e.target.value) && parseInt(e.target.value) <= 1000)
    ) {
      if (e.target.value === "") {
        setCantidad(0);
      } else {
        setCantidad(parseInt(e.target.value));
      }
    }
  };

  const AñdirTalla = (e) => {
    e.preventDefault();
    let t = JSON.stringify([e.target.name]);
    if (t === '["S"]') {
      setActivo1("active");
      setActivo2("false");
      setActivo3("false");
      setActivo4("false");
      setTalla("S");
    }

    if (t === '["M"]') {
      setActivo1("false");
      setActivo2("active");
      setActivo3("false");
      setActivo4("false");
      setTalla("M");
    }

    if (t === '["L"]') {
      setActivo1("false");
      setActivo2("false");
      setActivo3("active");
      setActivo4("false");
      setTalla("L");
    }

    if (t === '["XL"]') {
      setActivo1("false");
      setActivo2("false");
      setActivo3("false");
      setActivo4("active");
      setTalla("XL");
    }
  };

  const Añadir = (e) => {
    e.preventDefault();

    if (talla === "" || cantidad === 0) {
      Mostrar_Alerta("Verifique su Pedido", "alert-danger");
      return;
    } else {
      let cams,
        NewCantidad = cantidad;
      if (camisas) {
        cams = camisas.filter(
          (camis) => camis.codigo === codigo && camis.talla === talla
        );
      }

      if (cams.length !== 0) {
        for (let i of cams) {
          NewCantidad = NewCantidad + parseInt(i.cantidad);
        }

        ModificarCamisa(NewCantidad, talla, codigo);
      } else {
        let id = uuidv4();
        const func = { id, codigo, cantidad, precio, talla, imgD };
        AñadirCarrito(func);
      }
      setCantidad(0);
      setActivo1("false");
      setActivo2("false");
      setActivo3("false");
      setActivo4("false");
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      setVerificar(false);
    } else {
      setVerificar(true);
    }
  };
  return (
    <>
      <h1 className="carrito-nombre">Detalle Camisa</h1>
      <div className="contenedor-padre-detalle container">
        <div className="row">
          <div className="col-xs-12 col-lg-6 text-center">
            <img className="img-detalle img-fluid" src={imgD} alt="imagen" />
          </div>
          <div className="col-xs-12 col-lg-6 mt-5">
            <label className="detalle-c">Precio:</label>{" "}
            <span className="detalle-cm">C${precio} </span> <br />
            <label className="detalle-c">Color: </label>{" "}
            <span className="detalle-cm">{color} </span>
            <br />
            <ul className=" tallas-detalle nav nav-tabs">
              <li className="nav-item">
                <span className="nav-link primer">Talla: </span>
              </li>
              <li className="nav-item">
                <a
                  href="#S"
                  className={`nav-link ${activo1}`}
                  name="S"
                  onClick={AñdirTalla}
                >
                  S
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#M"
                  className={`nav-link ${activo2}`}
                  name="M"
                  onClick={AñdirTalla}
                >
                  M
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#L"
                  className={`nav-link ${activo3}`}
                  name="L"
                  onClick={AñdirTalla}
                >
                  L
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#XL"
                  className={`nav-link ${activo4}`}
                  name="XL"
                  onClick={AñdirTalla}
                >
                  XL
                </a>
              </li>
            </ul>
            <div className="row container detallito">
              <div className="col-xs-12">
                <div className="input-group mt-3">
                  <div className="input-group-prepend">
                    <input
                      className="btn btn-outline-primary"
                      type="button"
                      value="-"
                      name="restar"
                      onClick={Decrementar}
                    />
                  </div>
                  <input
                    className=" input-cantidad form-control"
                    type="text"
                    name="cantidad"
                    placeholder="0"
                    value={cantidad}
                    onChange={OnChange}
                    onKeyDown={onKeyDown}
                    maxLength="1000"
                  />
                  <div className="input-group-append mr-2">
                    <input
                      name="sumar"
                      className="btn btn-outline-primary "
                      type="button"
                      value="+"
                      onClick={Incrementar}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <input
                  type="button"
                  value="Agregar"
                  onClick={Añadir}
                  className="añadir-cart"
                />
              </div>
            </div>
            {alerta ? (
              <div
                className={`mr-4 mt-3 w-50 text-center alert ${alerta.categoria}`}
                role="alert"
              >
                {alerta.msg}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleCamisa;
