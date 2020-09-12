import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  REGISTRO_BORRAR,
  CERRAR_SESION,
  /*LOGIN_EXITOSO,
  LOGIN_ERROR,*/
  RECARGAR_AUTH,
  REGISTRO_USER,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_ERROR:
      return {
        ...state,
        registrado: action.payload,
      };
    case REGISTRO_BORRAR:
      return {
        ...state,
        registrado: "",
      };
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: localStorage.getItem("autenticado"),
        token: localStorage.getItem("token"),
      };
    case REGISTRO_USER:
      localStorage.setItem("usuario", JSON.stringify(action.payload));
      return {
        ...state,
        usuario: action.payload,
      };
    case RECARGAR_AUTH:
      return {
        autenticado: "true",
        usuario: JSON.parse(localStorage.getItem("usuario")),
        token: localStorage.getItem("token"),
      };

    case CERRAR_SESION:
      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
      localStorage.removeItem("autenticado");
      return {
        autenticado: "false",
        registrado: "",
        token: "",
        usuario: [],
      };
    default:
      return state;
  }
};
