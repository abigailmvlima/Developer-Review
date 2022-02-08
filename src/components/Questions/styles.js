import styled from "styled-components";

export const Container = styled.div`
  display: Flex;
  flex-direction: column;
  border-bottom: 1px solid #2b7a6e;
  padding-bottom: 8px;
`;

export const Question = styled.div`
  display: Flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ContentFeedback = styled.div`
  display: Flex;
  flex-direction: row;
  margin-left: 10px;
`;

export const FeedbackLetter = styled.div`
  display: Flex;
  font-size: 11px;
  font-weight: bold;
`;

export const FeedbackResponse = styled.div`
  display: Flex;
  font-size: 11px;
  margin-left: 5px;
`;
