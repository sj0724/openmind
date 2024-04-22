import styled from 'styled-components';

export const QuestBody = styled.div`
  display: flex;
  width: 68.4rem;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  border-radius: 1.6rem;
  background: var(--Grayscale-10);
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const QuestionStatus = styled.div`
  display: flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: 1px solid ${(props) => (props.$complete ? 'var(--Brown-40)' : 'var(--Grayscale-40)')};
  background: var(--Grayscale-10);
  color: ${(props) => (props.$complete ? 'var(--Brown-40)' : 'var(--Grayscale-40)')};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const QuestionContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  flex-direction: column;
`;

export const Time = styled.p`
  color: var(--Grayscale-40);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const QuestionDetail = styled.p`
  color: var(--Grayscale-60);
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const QuestionModal = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 2.4rem;
  align-self: stretch;
  border-top: 1px solid var(--Grayscale-30);
  gap: 3.2rem;
`;

export const ThumbnsBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: var(${(props) => (props.color ? props.color : '--Grayscale-40')});
`;
