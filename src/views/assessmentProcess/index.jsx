import { memo, useState, useEffect } from "react";
import Assessment from "../../components/Assessment";
import { useSelector } from "react-redux";
import actions from "../../stores/actions";

import * as ST from "./styles";

const AssessmentProcess = () => {
  const stateData = useSelector((s) => s?.ASSESSMENT);
  const data = stateData?.data;
  const stateProcess = useSelector((s) => s?.ASS_PROCESS);
  const [question, setQuestion] = useState({});

  const onNext = () => {
    setQuestion({});
    const newPage = stateProcess?.page + 1;
    actions.assessmentProcess.next({
      page: newPage,
      question: {
        ...(stateProcess?.question || {}),
        [`${newPage}`]: question,
      },
    });
    if (newPage > data?.row.length - 1) {
      actions.navigate.show("/avaliacao/resumo");
    }
  };

  return (
    <ST.Container>
      <ST.TextHeader>{data.title}</ST.TextHeader>
      <ST.TextBody>
        <Assessment
          data={data.row[stateProcess?.page]}
          question={question}
          setQuestion={setQuestion}
        />
      </ST.TextBody>
      <ST.Info>
        <ST.AcountPages>
          {stateProcess?.page + 1} / {data?.row.length}
        </ST.AcountPages>
      </ST.Info>
      <ST.TextFooter>
        <ST.Button onClick={onNext}>Próximo</ST.Button>
      </ST.TextFooter>
    </ST.Container>
  );
};

export default memo(AssessmentProcess);
