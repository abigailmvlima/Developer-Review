import { memo } from "react";

import * as ST from "./styles";

const CheckBox = ({ name, label, onChange, checked }) => {
  const _onChange = (e) => {
    const returnData = {
      name,
      value: e.target.checked == true,
    };
    onChange(returnData);
  };
  return (
    <ST.Container>
      <ST.CheckBox>
        <input
          type="checkbox"
          onChange={(e) => _onChange(e)}
          checked={checked}
        />
      </ST.CheckBox>
      <ST.Label>{label}</ST.Label>
    </ST.Container>
  );
};

export default memo(CheckBox);
