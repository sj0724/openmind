import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  border-radius: 1.6rem;
  border: 1px solid var(--Brown-30);
  background: var(--Brown-10);
  margin: 0 auto;

  @media (max-width: 1199px) {
    margin: 0 3.2rem;
    width: 100%;
    max-width: 68.4rem;
  }
`;

export const QuestionCount = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--Brown-40);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
`;
