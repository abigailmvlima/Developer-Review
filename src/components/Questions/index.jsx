import { memo, Fragment } from "react";

import * as ST from "./styles";

const Questions = ({ label, values }) => {
  if (!label) return <Fragment />;
  return (
    <ST.Container>
      <ST.Question>{label}</ST.Question>
      {values &&
        values.map((row, key) => {
          return (
            <ST.ContentFeedback key={key}>
              <ST.FeedbackLetter>{row.value}</ST.FeedbackLetter>
              <ST.FeedbackResponse>{row.label}</ST.FeedbackResponse>
            </ST.ContentFeedback>
          );
        })}
    </ST.Container>
  );
};

export default memo(Questions);
