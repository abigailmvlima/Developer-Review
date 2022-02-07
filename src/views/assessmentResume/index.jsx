import { memo, useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import * as ST from "./styles";

const AssessmentResume = () => {
  const stateData = useSelector((s) => s?.ASSESSMENT);
  const data = stateData?.data;
  const stateProcess = useSelector((s) => s?.ASS_PROCESS);
  const [acountQuestion, setAcountQuestion] = useState(0);

  useEffect(() => {
    const question = stateProcess.question;
    console.log(stateProcess);
    setAcountQuestion(data?.row.length);
    data.row.filter((d) => {
      const temp = question[d.id];
    });
  }, [data, stateProcess]);

  return (
    <ST.Container>
      <ST.Content>
        <ST.Nome>Nome</ST.Nome>
        <ST.Data>{moment().format("DD/MM/Y HH:mm")}</ST.Data>
      </ST.Content>
      <ST.ContentResume>
        <ST.Resume>Resumo do Teste</ST.Resume>
      </ST.ContentResume>
      <ST.ContentTeste>
        <ST.Desenvolvedor>Desenvolvedor Pleno</ST.Desenvolvedor>
        <ST.Row>
          <ST.Column50>
            <ST.TQuestion>Total de Questões: {acountQuestion}</ST.TQuestion>
            <ST.TAcertos>Total de Acertos: 4</ST.TAcertos>
          </ST.Column50>

          <ST.Column50>
            <ST.Porcetagem>
              <span>20%</span>
            </ST.Porcetagem>
          </ST.Column50>
        </ST.Row>
      </ST.ContentTeste>
    </ST.Container>
  );
};

export default memo(AssessmentResume);
