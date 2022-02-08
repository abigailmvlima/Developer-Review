import { memo, useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import * as ST from "./styles";
import Question from "../../components/Questions";

const AssessmentResume = () => {
  const stateData = useSelector((s) => s?.ASSESSMENT);
  const data = stateData?.data;
  const stateProcess = useSelector((s) => s?.ASS_PROCESS);
  const [acountQuestion, setAcountQuestion] = useState(0);
  const [acountHits, setAcountHits] = useState(0);
  const [acountPercentual, setAcountPercentual] = useState(0);
  const [listErrors, setListErrors] = useState([]);

  useEffect(() => {
    const question = stateProcess.question;
    const responses = data.response;
    setAcountQuestion(data?.row.length);
    const hits = responses.filter((d) => {
      const temp = question[d.id];
      const res = d.value.filter((v) => temp[v] == true);
      return res.length == d.value.length;
    });
    setAcountHits(hits.length);
    console.log(22, data);
    const errors = responses
      .filter((d) => {
        const temp = question[d.id];
        const res = d.value.filter((v) => temp[v] == true);
        return res.length != d.value.length;
      })
      .map((m) => {
        const row = data.row.find((f) => f.id == m.id);
        const res = data.response.find((f) => f.id == m.id);
        return {
          label: row.text,
        };
      });
    console.log(errors);
  }, [data, stateProcess]);

  useEffect(() => {
    const percentual = Math.round((acountHits * 100) / acountQuestion);
    setAcountPercentual(percentual);
  }, [acountQuestion, acountHits]);

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
            <ST.TAcertos>Total de Acertos: {acountHits}</ST.TAcertos>
          </ST.Column50>

          <ST.Column50>
            <ST.Porcetagem>
              <span>{`${acountPercentual}%`}</span>
            </ST.Porcetagem>
          </ST.Column50>
        </ST.Row>
      </ST.ContentTeste>
      <ST.TituloErros>Erros</ST.TituloErros>
      <ST.ContentErros>
        <Question
          label={"texto"}
          values={[
            {
              label: "resposta",
              value: "a",
            },
          ]}
        />
      </ST.ContentErros>
    </ST.Container>
  );
};

export default memo(AssessmentResume);
