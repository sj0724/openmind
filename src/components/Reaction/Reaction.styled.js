import styled from 'styled-components';

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
