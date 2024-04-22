import styled from 'styled-components';

const LinkBtn = styled.span`
  height: 4.6rem;
  width: 17rem;
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 0.8rem;
  border: 1px solid var(--Brown-40);
  background: var(--Brown-10);
  color: var(--Brown-40);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
  cursor: pointer;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  &:hover {
    border: 2px solid var(--Brown-40);
    background: var(--Brown-10);
  }

  &:active {
    border: 2px solid var(--Brown-40);
    background: var(--Brown-20);
  }

  @media (max-width: 769px) {
    width: 13rem;
    height: 3.4rem;
    padding: 0.8rem 1.2rem;
    gap: 4px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

export default LinkBtn;
