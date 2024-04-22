import styled from 'styled-components';
import { QuestionDetail, Time } from '../Question/Question.styled';

export const AnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;
`;

export const Profile = styled.div`
  display: flex;
  width: 4.8rem;
  height: 4.8rem;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  border-radius: 9999px;
`;

export const AnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  color: ${(props) => (props.$rejected ? 'var(--Red-50)' : 'var(--Grayscale-60)')};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
`;

export const Answerinfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const UserName = styled(QuestionDetail)``;

export const AnswerTime = styled(Time)``;
