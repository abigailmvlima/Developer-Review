import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const TextBody = styled.div`
  display: flex;
  justify-content: left;
  margin: 0 20px;
  padding: 20px 20px;
  border-radius: 30px;
  font-size: 14px;
  background-color: #fff;
  background: rgb(234, 242, 242);
  background: linear-gradient(
    180deg,
    rgba(234, 242, 242, 0.738532913165266) 2%,
    rgba(234, 242, 242, 0.7693452380952381) 51%,
    rgba(234, 242, 242, 1) 100%,
    rgba(234, 242, 242, 0.5536589635854341) 100%
  );
`;

export const Info = styled.div`
  display: flex;
  margin: 0 50px;
  justify-content: flex-end;
`;

export const AcountPages = styled.div`
  display: flex;
`;

export const TextFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  margin: 20px 25px;
  border-radius: 30px;
  padding: 10px 25px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  letter-spacing: 1.2px;
  font-size: 12px;
`;
