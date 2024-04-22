import styled from 'styled-components';

export const OuterContainer = styled.div`
  margin: 0 auto;
  padding: 0 3.2rem;

  @media (max-width: 769px) {
    padding: 0 2.4rem;
  }
`;

/* width: 100%;
  max-width: 120rem;

   max-width: 40rem; */
export const Container = styled.div`
  min-height: 39.4vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  position: relative;
  margin: 5rem auto;
  max-width: 96rem;
  place-items: center;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(auto-fit, minmax(186px, 1fr));
  }

  @media (max-width: 884px) {
    max-width: 70rem;
  }

  @media (max-width: 769px) {
    max-width: 40rem;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 22rem;
  height: 18.7rem;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--Grayscale-40);
  z-index: 1;
  transition: width 0.3s ease;

  &: hover {
    background-color: var(--Grayscale-30);
  }

  @media (max-width: 884px) {
    min-width: 22rem;
  }

  @media (max-width: 769px) {
    min-width: 16rem;
  }
`;

export const CardWraper = styled.div`
  border-radius: 1.6rem;
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

export const CardImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;

export const CardName = styled.p`
  color: #000;
  margin-top: 1rem;
  font-size: 2rem;
`;

export const CardInfo = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`;

export const QuestionCountMessage = styled.span`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  p {
    color: var(--Grayscale-40);
    font-size: 1.6rem;
  }
`;

export const QuestionCount = styled.p`
  display: flex;
  align-items: center;
  color: var(--Grayscale-40);
  font-size: 1.6rem;
`;
