import React, { useEffect, useContext } from "react";
import CamisaContext from "../../../context/Camisas/camisaContext";
import UbicacionContext from "../../../context/ubicacion/ubicacionContext";
import Woman from "./catalogoImagen";
import ListaCamisas from "./ListaCamisas";

const Index = () => {
  const camisacontext = useContext(CamisaContext);
  const { listado, GuardarListadoCamisa } = camisacontext;

  const ubicacioncontext = useContext(UbicacionContext);
  const { Activo3 } = ubicacioncontext;

  useEffect(() => {
    const llenarImagen = () => {
      GuardarListadoCamisa(Woman);
      localStorage.setItem("lista", JSON.stringify(Woman));

      Activo3();
    };

    llenarImagen();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid contenedor-padre-camisas">
      <h1 className="carrito-nombre pt-4 pb-4">Lista de Estilos</h1>
      <div className="row lista-camisas-men ">
        {listado
          ? listado.map((camisas) => (
              <ListaCamisas key={camisas.codigo} camisa={camisas} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Index;
