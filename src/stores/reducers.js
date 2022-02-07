import navigate from "./navigate/reducer";
import assessment from "./assessment/reducer";
import assessmentProcess from "./assessmentProcess/reducer";

const dataExport = {
  ...navigate,
  ...assessment,
  ...assessmentProcess,
};

export default dataExport;
