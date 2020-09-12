import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
import axios from "../../components/config/axios";
import tokenAuth from "../../components/config/token";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  REGISTRO_BORRAR,
  RECARGAR_AUTH,
  CERRAR_SESION,
  REGISTRO_USER,
  /*  LOGIN_EXITOSO,
  LOGIN_ERROR,*/
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    registrado: "",
    autenticado: "false",
    usuario: [],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const Registrar_Usuario = async (datos) => {
    try {
      const respuesta = await axios.post("/api/usuarios", datos);
      if (respuesta.data.codigo === "rojo") {
        dispatch({
          type: REGISTRO_ERROR,
          payload: respuesta.data.msg,
        });

        setTimeout(() => {
          dispatch({
            type: REGISTRO_BORRAR,
          });
        }, 3000);
      } else {
        localStorage.setItem("autenticado", "true");

        dispatch({
          type: REGISTRO_EXITOSO,
          payload: respuesta.data,
        });
        Mostrar_Usuario(datos.correo);
      }

      //Verificar_Usuario(datos.correo);
    } catch (error) {
      console.log(error);
    }
  };

  const Recargar_Auth = () => {
    dispatch({
      type: RECARGAR_AUTH,
    });
  };

  //login
  const Iniciar_Sesion = async (datos) => {
    const respuesta = await axios.post("/api/auth", datos);
    if (respuesta.data.codigo === "rojo") {
      dispatch({
        type: REGISTRO_ERROR,
        payload: respuesta.data.msg,
      });

      setTimeout(() => {
        dispatch({
          type: REGISTRO_BORRAR,
          payload: "",
        });
      }, 3000);
    } else {
      localStorage.setItem("autenticado", "true");

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });

      Mostrar_Usuario(datos.correo);
    }
  };

  const Mostrar_Usuario = async (email) => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    let correo = { correo: email };
    const respuesta = await axios.post("/api/usuarios/mostrar", correo);
    localStorage.setItem("usuario", JSON.stringify(respuesta.data));
    dispatch({
      type: REGISTRO_USER,
      payload: respuesta.data,
    });
  };

  const cerrar_sesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        usuario: state.usuario,
        registrado: state.registrado,
        autenticado: state.autenticado,
        token: state.token,
        Registrar_Usuario,
        Iniciar_Sesion,
        Recargar_Auth,
        cerrar_sesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
