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

export default (state, action) => {
  switch (action.type) {
    case DETALLE_CAMISA:
      return {
        ...state,
        listado: action.payload,
      };
    case AÑADIR_CARRITO:
      localStorage.setItem(
        "carrito",
        JSON.stringify([...state.camisas, action.payload])
      );
      return {
        ...state,
        camisas: [...state.camisas, action.payload],
      };
    case RECARGAR_CARRITO:
      let cart = JSON.parse(localStorage.getItem("carrito"));
      return {
        ...state,
        camisas: cart,
      };
    case ELIMINAR_CARRITO:
      localStorage.setItem(
        "carrito",
        JSON.stringify(
          state.camisas.filter((camisa) => camisa.id !== action.payload)
        )
      );
      return {
        ...state,
        camisas: state.camisas.filter((camisa) => camisa.id !== action.payload),
      };

    case MODIFICAR_CAMISA:
      localStorage.setItem(
        "carrito",
        JSON.stringify(
          state.camisas.map((camisa) => {
            if (
              camisa.talla === action.payload.t &&
              camisa.codigo === action.payload.cd
            ) {
              camisa.cantidad = action.payload.c;
            }

            return camisa;
          })
        )
      );
      return {
        ...state,
        camisas: state.camisas.map((camisa) => {
          if (
            camisa.talla === action.payload.t &&
            camisa.codigo === action.payload.cd
          ) {
            camisa.cantidad = action.payload.c;
          }

          return camisa;
        }),
      };
    case INCREMENTAR_CAMISA:
      localStorage.setItem(
        "carrito",
        JSON.stringify(
          state.camisas.map((camisa) => {
            if (camisa.id === action.payload) {
              if (parseInt(camisa.cantidad) < 1000) {
                camisa.cantidad = parseInt(camisa.cantidad) + 1;
              }
            }

            return camisa;
          })
        )
      );
      return {
        ...state,
        camisas: state.camisas.map((camisa) => {
          return camisa;
        }),
      };
    case DECREMENTAR_CAMISA:
      localStorage.setItem(
        "carrito",
        JSON.stringify(
          state.camisas.map((camisa) => {
            if (camisa.id === action.payload) {
              if (parseInt(camisa.cantidad) > 1) {
                camisa.cantidad = parseInt(camisa.cantidad) - 1;
              }
            }

            return camisa;
          })
        )
      );
      return {
        ...state,
        camisas: state.camisas.map((camisa) => {
          return camisa;
        }),
      };

    case VARIACION_CAMISA:
      localStorage.setItem(
        "carrito",
        JSON.stringify(
          state.camisas.map((camisa) => {
            if (camisa.id === action.payload.id) {
              if (action.payload.c === "") {
                camisa.cantidad = 0;
              } else {
                camisa.cantidad = parseInt(action.payload.c);
              }
            }

            return camisa;
          })
        )
      );
      return {
        ...state,
        camisas: state.camisas.map((camisa) => {
          if (camisa.id === action.payload.id) {
            if (action.payload.c === "") {
              camisa.cantidad = 0;
            } else {
              camisa.cantidad = parseInt(action.payload.c);
            }
          }

          return camisa;
        }),
      };

    case VACIAR_CAMISA:
      localStorage.removeItem("carrito");
      return {
        ...state,
        camisas: [],
      };
    default:
      return state;
  }
};
