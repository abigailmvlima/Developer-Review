import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`;

export const Nome = styled.div`
  display: flex;
`;
export const Data = styled.div`
  display: flex;
`;
export const ContentResume = styled.div`
  display: flex;
  margin: 10px 10px;
`;

export const Resume = styled.div`
  display: flex;
`;

export const ContentTeste = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  background-color: red;
`;

export const Desenvolvedor = styled.div`
  display: flex;
  background-color: #fff;
`;
export const Row = styled.div`
  display: flex;
`;

export const Column50 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const TQuestion = styled.div`
  display: flex;
`;

export const TAcertos = styled.div`
  display: flex;
`;

export const Porcetagem = styled.div`
  display: flex;
  background-color: #ff2;
  height: 100%;

  justify-content: center;
  align-items: center;

  & > span {
    background-color: #fd8;
    padding: 20px 15px;
    border-radius: 70px;
    margin: 30px 0;
  }
`;
