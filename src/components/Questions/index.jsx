import { memo } from "react";

import * as ST from "./styles";

const Questions = () => {
  return (
    <ST.Container>
      <ST.Question>O que é React?</ST.Question>
      <ST.ContentFeedback>
        <ST.FeedbackLetter>c)</ST.FeedbackLetter>
        <ST.FeedbackResponse>React é uma biblioteca</ST.FeedbackResponse>
      </ST.ContentFeedback>
    </ST.Container>
  );
};

export default memo(Questions);
