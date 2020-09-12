import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";
const AlertState = (props) => {
  const initialState = {
    alerta: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const Mostrar_Alerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria,
      },
    });

    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA,
      });
    }, 3000);
  };
  return (
    <AlertContext.Provider value={{ alerta: state.alerta, Mostrar_Alerta }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
