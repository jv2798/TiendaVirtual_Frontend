import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
/*import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
} from "../../types";*/

const AuthState = (props) => {
  const initialState = {
    usuario: null,
    mensaje: null,
    autenticado: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const Registrar_Usuario = (datos) => {
    console.log("registrado");
    dispatch({});
  };

  const Iniciar_Sesion = (datos) => {
    console.log("iniciado");
  };

  const Verificar_Usuario = () => {
    console.log("no registrado");
  };
  return (
    <AuthContext.Provider
      value={{
        usuario: state.usuario,
        mensaje: state.mensaje,
        Registrar_Usuario,
        Iniciar_Sesion,
        Verificar_Usuario,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
