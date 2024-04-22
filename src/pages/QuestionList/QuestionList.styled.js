import styled from 'styled-components';
import Image from '../../assets/backgroundImage-removebg.png';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
`;

export const HeaderLogo = styled.img`
  position: absolute;
  width: 17rem;
  height: 6.7rem;
  top: 5rem;

  @media (max-width: 769px) {
    top: 4rem;
    width: 12.4rem;
    height: 4.9rem;
  }
`;

export const HeaderImage = styled.div`
  display: block;
  height: 23.4rem;
  width: 120rem;
  background: url(${Image}) 0px -267.142px / 100% 515.021% no-repeat;

  @media (max-width: 769px) {
    width: 90.6rem;
    height: 17.7rem;
    background: url(${Image}) 0px -202.069px / 100% 515.021% no-repeat;
  }
`;

export const Body = styled.div`
  background-color: var(--Grayscale-20);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 19rem 0 6rem 0;

  @media (max-width: 769px) {
    padding: 19rem 0 6rem 0;
  }
`;

export const FloatingBtn = styled.span`
  cursor: pointer;
  position: fixed;
  right: 2.5rem;
  bottom: 2.5rem;
  display: flex;
  width: 20.8rem;
  height: 5.4rem;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 20rem;
  background: var(--Brown-40);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--Grayscale-10);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;

  @media (max-width: 769px) {
    width: 12.3rem;
    font-size: 1.8rem;
    white-space: nowrap;
  }
`;

export const PageButtons = styled.div`
  position: fixed;
  right: 2.5rem;
  bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;

  @media (max-width: 769px) {
    flex-direction: row-reverse;
  }
`;

export const UpButton = styled.span`
  cursor: pointer;
  border-radius: 20rem;
  background-color: var(--Grayscale-30);
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevButton = styled.span`
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 20rem;
  padding: 1rem 2rem;
  background-color: var(--Grayscale-30);
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 0.8rem;
  }

  @media (max-width: 769px) {
    width: 4rem;
    height: 4rem;

    img {
      margin: 0;
    }

    p {
      display: none;
    }
  }
`;

export const NoQuestion = styled.img`
  margin: 9.7rem 25.9rem 4.1rem;

  @media (max-width: 1199px) {
    margin: 9.7rem 3.2rem 4.1rem;
  }
`;

export const PageEnd = styled.div``;
