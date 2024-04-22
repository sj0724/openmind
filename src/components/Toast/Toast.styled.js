import styled from 'styled-components';

const ToastBody = styled.div`
  position: fixed;
  bottom: 6rem;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 1.2rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: var(--Grayscale-60);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: var(--Grayscale-10);
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }
`;

export default ToastBody;
