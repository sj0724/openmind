import styled from 'styled-components';
import Image from '../../assets/backgroundImage-removebg.png';

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--Grayscale-20);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainLogo = styled.img`
  display: flex;
  width: 45.6rem;
  justify-content: center;
  align-items: center;
  margin-top: 16rem;
  z-index: 10;
  margin-bottom: 2.4rem;

  @media (max-width: 769px) {
    width: 24.8rem;
    height: 9.8rem;
  }
`;

export const UserForm = styled.form`
  display: flex;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 1.6rem;
  background: var(--Grayscale-10);
  z-index: 10;

  img {
    height: 2rem;
    width: 2rem;
  }

  input {
    border: none;
    width: 100%;
  }
`;

export const UserInput = styled.label`
  display: flex;
  width: 33.6rem;
  height: 4.6rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.8rem;
  border: 1px solid var(--Grayscale-40);
  background: var(--Grayscale-10);
  position: relative;
`;

export const UserSubmitBtn = styled.button`
  height: 4.6rem;
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  border-radius: 0.8rem;
  background: var(--Brown-40);
  color: var(--Grayscale-10);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;

  &:hover {
    border: 2px solid var(--Brown-50);
    background: var(--Brown-40);
  }

  &:active {
    background: var(--Brown-50);
  }
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--Grayscale-20);
`;

export const ImageArea = styled.div`
  width: 120rem;
  height: 62.7rem;
  margin: 0 auto;
  background: url(${Image}) var(--Grayscale-20) 0px 0px / 100% 191.388% no-repeat;

  @media (max-width: 1199px) {
    width: 76.8rem;
    height: 40.1rem;
  }
  @media (max-width: 769px) {
    width: 45.6rem;
    height: 23.9rem;
  }
`;

export const LinkQuestion = styled.div`
  z-index: 10;
  position: absolute;
  top: 4rem;
  right: 5rem;

  @media (max-width: 769px) {
    position: static;
    margin-bottom: 2.4rem;
  }
`;
