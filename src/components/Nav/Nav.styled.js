import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 4rem 5rem;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkAnswer = styled.div`
  position: static;
  height: 100%;

  @media (max-width: 769px) {
    margin-top: 20px;
  }
`;
