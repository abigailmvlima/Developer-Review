import types from "./types";

const reducerState = (state = types.states.initial, action) => {
  switch (action.type) {
    case types.states.save:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

const dataExport = {
  [types.states.name]: reducerState,
};

export default dataExport;
