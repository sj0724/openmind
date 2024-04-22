import styled from 'styled-components';

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--Grayscale-10);
  border: 0.1rem solid var(--Grayscale-30);
  border-radius: 0.8rem;
  box-shadow: 0 4rem 4rem 0 #8c8c8c40;
  position: absolute;
  z-index: 2;
  top: 4.5rem;
`;

export const DropdownMenuItem = styled.li`
  width: 7.9rem;
  height: 3rem;
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--Blue-50);
    font-weight: 600;
  }
`;
