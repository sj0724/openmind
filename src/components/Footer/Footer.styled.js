import styled from 'styled-components';

export const Body = styled.div`
  height: 14rem;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: Pretendard;
  background-color: var(--Brown-30);
  display: flex;
  align-items: end;
  padding: 2.5rem;
  color: var(--Brown-40);

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
  }

  @media (max-width: 769px) {
    align-items: normal;

    img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 769px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Container = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9rem;
  margin-right: 2rem;
`;

export const Content = styled.a`
  white-space: nowrap;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--Brown-40);

  @media (max-width: 769px) {
    font-size: 1.2rem;
  }
`;
