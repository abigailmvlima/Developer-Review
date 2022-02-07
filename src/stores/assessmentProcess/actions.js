import { store } from "../../app/store";
import types from "./types";

const next = (data) => ({
  type: types.states.save,
  data: data || {},
});

const dataExport = {
  next: (data) => {
    store.dispatch(next(data));
  },
};

export default dataExport;
