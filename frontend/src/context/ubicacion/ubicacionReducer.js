import {
  HEADER_ACTIVO1,
  HEADER_ACTIVO2,
  HEADER_ACTIVO3,
  HEADER_ACTIVO4,
  HEADER_ACTIVO5,
  HEADER_ACTIVO6,
  HEADER_ACTIVO7,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case HEADER_ACTIVO1:
      return {
        ...state,
        activo1: "link-activo",
        activo2: "",
        activo3: "",
        activo4: "",
        activo5: "",
        activo6: "",
      };
    case HEADER_ACTIVO2:
      return {
        ...state,
        activo1: "",
        activo2: "link-activo",
        activo3: "",
        activo4: "",
        activo5: "",
        activo6: "",
      };
    case HEADER_ACTIVO3:
      return {
        ...state,
        activo1: "",
        activo2: "",
        activo3: "link-activo",
        activo4: "",
        activo5: "",
        activo6: "",
      };
    case HEADER_ACTIVO4:
      return {
        ...state,
        activo1: "",
        activo2: "",
        activo3: "",
        activo4: "link-activo",
        activo5: "",
        activo6: "",
      };
    case HEADER_ACTIVO5:
      return {
        ...state,
        activo1: "",
        activo2: "",
        activo3: "",
        activo4: "",
        activo5: "link-activo",
        activo6: "",
      };
    case HEADER_ACTIVO6:
      return {
        ...state,
        activo1: "",
        activo2: "",
        activo3: "",
        activo4: "",
        activo5: "",
        activo6: "link-activo",
      };
    case HEADER_ACTIVO7:
      return {
        ...state,
        activo1: "",
        activo2: "",
        activo3: "",
        activo4: "",
        activo5: "",
        activo6: "",
      };
    default:
      return state;
  }
};
