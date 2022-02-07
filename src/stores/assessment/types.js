import data from "./data";

const name = "ASSESSMENT";

const states = {
  name: `${name}`,
  success: `${name}_SUCCESS`,
  error: `${name}_ERROR`,
  initial: {
    loading: false,
    loaded: true,
    error: false,
    data: data,
  },
};

const dataExport = { states };
export default dataExport;
