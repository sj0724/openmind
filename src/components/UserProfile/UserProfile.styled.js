import styled from 'styled-components';
import { Profile } from '../Answer/Answer.styled';

export const UserInfo = styled.div`
  position: absolute;
  top: 12.9rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--Grayscale-60);
  font-family: Pretendard;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  gap: 12px;

  @media (max-width: 769px) {
    top: 10rem;
  }
`;

export const UserImage = styled(Profile)`
  width: 13.6rem;
  height: 13.6rem;
  background-image: url(${(props) => props.$image});

  @media (max-width: 769px) {
    width: 10.4rem;
    height: 10.4rem;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  gap: 0.8rem;
`;

export const SnsBtn = styled.span`
  cursor: pointer;
  display: flex;
  width: 4rem;
  height: 4rem;
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 20rem;
  background-color: var(${(props) => props.color});
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-position: center;
`;
