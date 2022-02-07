import { memo } from "react";
import CheckBox from "../CheckBox";

import * as ST from "./styles";

const Assessment = ({ data, question, setQuestion }) => {
  const onChange = (name, value) => {
    if (!value) return;
    setQuestion({
      ...question,
      [name]: value,
    });
  };

  return (
    <ST.Container>
      <ST.Quest>{data.text}</ST.Quest>
      <ST.Response>
        {data.response.map((row, key) => {
          return (
            <CheckBox
              key={key}
              name={row.value}
              label={`${row.value} - ${row.label}`}
              onChange={(e) => onChange(row.value, e.value)}
              checked={question[row.value]}
            />
          );
        })}
      </ST.Response>
    </ST.Container>
  );
};

export default memo(Assessment);
