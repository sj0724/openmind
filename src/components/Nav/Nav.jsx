import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import * as S from './Nav.styled';
import LinkButton from '../LinkButton/LinkButton';

function Nav() {
  const questionId = localStorage.getItem('questionId');

  const handleAnswerButtonClick = () => {
    if (questionId) {
      window.location.href = `/post/${questionId}/answer`;
    } else {
      window.location.href = '/';
    }
  };

  return (
    <S.NavWrapper>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <S.LinkAnswer onClick={handleAnswerButtonClick}>
        <LinkButton>답변하러 가기</LinkButton>
      </S.LinkAnswer>
    </S.NavWrapper>
  );
}

export default Nav;
