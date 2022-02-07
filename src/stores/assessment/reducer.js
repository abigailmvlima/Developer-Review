import types from "./types";

const reducerState = (state = types.states.initial, action) => {
  switch (action.type) {
    case types.states.name:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
      };

    case types.states.success:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
      };

    case types.states.error:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: true,
      };

    default:
      return state;
  }
};

const dataExport = {
  [types.states.name]: reducerState,
};

export default dataExport;
