import React, { useReducer } from "react";
import ubicacionContext from "./ubicacionContext.js";
import ubicacionReducer from "./ubicacionReducer.js";

import {
  HEADER_ACTIVO1,
  HEADER_ACTIVO2,
  HEADER_ACTIVO3,
  HEADER_ACTIVO4,
  HEADER_ACTIVO5,
  HEADER_ACTIVO6,
  HEADER_ACTIVO7,
} from "../../types/index";
const UbicacionState = (props) => {
  const initialState = {
    activo1: "link-activo",
    activo2: "",
    activo3: "",
    activo4: "",
    activo5: "",
    activo6: "",
  };
  const [state, dispacth] = useReducer(ubicacionReducer, initialState);

  const Activo1 = () => {
    dispacth({
      type: HEADER_ACTIVO1,
    });
  };

  const Activo2 = () => {
    dispacth({
      type: HEADER_ACTIVO2,
    });
  };

  const Activo3 = () => {
    dispacth({
      type: HEADER_ACTIVO3,
    });
  };

  const Activo4 = () => {
    dispacth({
      type: HEADER_ACTIVO4,
    });
  };

  const Activo5 = () => {
    dispacth({
      type: HEADER_ACTIVO5,
    });
  };

  const Activo6 = () => {
    dispacth({
      type: HEADER_ACTIVO6,
    });
  };

  const Activo7 = () => {
    dispacth({
      type: HEADER_ACTIVO7,
    });
  };
  return (
    <ubicacionContext.Provider
      value={{
        activo1: state.activo1,
        activo2: state.activo2,
        activo3: state.activo3,
        activo4: state.activo4,
        activo5: state.activo5,
        activo6: state.activo6,
        Activo1,
        Activo2,
        Activo3,
        Activo4,
        Activo5,
        Activo6,
        Activo7,
      }}
    >
      {props.children}
    </ubicacionContext.Provider>
  );
};

export default UbicacionState;
