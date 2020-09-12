import React, { useReducer } from "react";
import {
  DETALLE_CAMISA,
  AÑADIR_CARRITO,
  RECARGAR_CARRITO,
  ELIMINAR_CARRITO,
  MODIFICAR_CAMISA,
  INCREMENTAR_CAMISA,
  DECREMENTAR_CAMISA,
  VARIACION_CAMISA,
  VACIAR_CAMISA,
} from "../../types";
import CamisaReducer from "./camisaReducer";
import CamisaContext from "./camisaContext";
import clienteAxios from "../../components/config/axios";
const CamisaState = (props) => {
  const initialState = {
    listado: "",
    camisas: [],
  };

  const [state, dispacth] = useReducer(CamisaReducer, initialState);

  const GuardarListadoCamisa = (lista) => {
    dispacth({
      type: DETALLE_CAMISA,

      payload: lista,
    });
  };

  const AñadirCarrito = (datos) => {
    dispacth({
      type: AÑADIR_CARRITO,
      payload: datos,
    });
  };

  const GuardandoListaCarrito = () => {
    dispacth({
      type: RECARGAR_CARRITO,
    });
  };

  const ModificarCamisa = (c, t, cd) => {
    dispacth({
      type: MODIFICAR_CAMISA,
      payload: {
        c,
        t,
        cd,
      },
    });
  };
  const EliminarCamisa = (id) => {
    dispacth({
      type: ELIMINAR_CARRITO,
      payload: id,
    });
  };

  const Incrementar = (id) => {
    dispacth({
      type: INCREMENTAR_CAMISA,
      payload: id,
    });
  };

  const Decrementar = (id) => {
    dispacth({
      type: DECREMENTAR_CAMISA,
      payload: id,
    });
  };

  const variacion = (id, c) => {
    dispacth({
      type: VARIACION_CAMISA,
      payload: { id, c },
    });
  };

  const RealizarCompra = async (datos) => {
    await clienteAxios.post("/api/correo", datos);
  };

  const ELiminar_Despues_Compra = () => {
    dispacth({
      type: VACIAR_CAMISA,
    });
  };
  return (
    <CamisaContext.Provider
      value={{
        listado: state.listado,
        camisas: state.camisas,
        GuardarListadoCamisa,
        AñadirCarrito,
        GuardandoListaCarrito,
        EliminarCamisa,
        ModificarCamisa,
        Incrementar,
        Decrementar,
        variacion,
        RealizarCompra,
        ELiminar_Despues_Compra,
      }}
    >
      {props.children}
    </CamisaContext.Provider>
  );
};

export default CamisaState;
