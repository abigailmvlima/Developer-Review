import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
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
  justify-content: center;
`;

export const Resume = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const ContentTeste = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;

  background-color: #fff;
  background: rgb(234, 242, 242);
  background: linear-gradient(
    200deg,
    rgba(234, 242, 242, 0.738532913165266) 2%,
    rgba(234, 242, 242, 0.7693452380952381) 51%,
    rgba(234, 242, 242, 1) 100%,
    rgba(234, 242, 242, 0.5536589635854341) 100%
  );
  margin: 10px 40px;
  padding: 30px 30px;
`;

export const Desenvolvedor = styled.div`
  display: flex;
  margin: 0 20px;
  font-size: 20px;
  color: #102e29;
  font-weight: bold;
  text-decoration: underline #2b7a6e;
`;

export const Row = styled.div`
  display: flex;
`;

export const Column50 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

export const TQuestion = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 40px;
  font-size: 14px;
`;

export const TAcertos = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 40px;
`;

export const Porcetagem = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  & > span {
    background: rgb(234, 242, 242);
    background: radial-gradient(
      circle,
      rgba(234, 242, 242, 1) 0%,
      rgba(85, 182, 182, 1) 0%,
      rgba(47, 50, 50, 1) 100%
    );
    padding: 35px 30px;
    margin-bottom: 5px;
    border-radius: 70px;
    color: #f1fcfc;
    font-size: 20px;
    font-weight: bold;
  }
`;
