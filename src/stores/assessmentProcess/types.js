const name = "ASS_PROCESS";

const states = {
  name: `${name}`,
  save: `${name}_SAVE`,
  initial: {
    page: 0,
    question: false,
  },
};

const dataExport = { states };
export default dataExport;
