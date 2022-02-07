import { memo } from "react";

import * as ST from "./styles";

const AssessmentResume = () => {
  return (
    <ST.Container>
      <ST.Content>
        <ST.Nome>Nome</ST.Nome>
        <ST.Data>Data</ST.Data>
      </ST.Content>
      <ST.ContentResume>
        <ST.Resume>Resumo do Teste</ST.Resume>
      </ST.ContentResume>
      <ST.ContentTeste>
        <ST.Desenvolvedor>Desenvolvedor Pleno</ST.Desenvolvedor>
        <ST.Row>
          <ST.Column50>
            <ST.TQuestion>Total de Questões: 10</ST.TQuestion>
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
