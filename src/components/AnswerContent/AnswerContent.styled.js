import styled from 'styled-components';

export const WrapAnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  flex: 1 0 0;
  width: 56rem;
`;

export const AnswerTextarea = styled.textarea`
  width: 100%;
  height: 18.6rem;
  padding: 1.6rem;
  resize: none;
  border-radius: 0.8rem;
  border: none;
  color: var(--Grayscale-40);
  background-color: var(--Grayscale-20);
  margin-bottom: 0.8rem;

  border: 1px solid black;
`;

export const AnswerButton = styled.button`
  width: 100%;
  height: 4.6rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  color: var(--Grayscale-10);
  background-color: var(${(props) => props.$bgColor});
`;

export const AnswerText = styled.p`
  color: ${(props) => (props.$rejected ? 'var(--Red-50)' : 'var(--Grayscale-60)')};
`;
