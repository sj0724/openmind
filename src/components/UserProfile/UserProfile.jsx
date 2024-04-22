import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import kakaoIcon from '../../assets/Kakaotalk.svg';
import linkIcon from '../../assets/Link.svg';
import facebookIcon from '../../assets/Facebook.svg';
import * as S from './UserProfile.styled';
import UserContext from '../../utils/contexts/UserContext';
import shareKakao from '../../utils/shareKakao';
import shareFacebook from '../../utils/shareFacebook';

function UserProfile({ copy }) {
  const user = useContext(UserContext);
  const location = useLocation();

  return (
    <S.UserInfo>
      <S.UserImage $image={user.imageSource} />
      <span>{user.name}</span>
      <S.BtnContainer>
        <S.SnsBtn
          color="--Brown-40"
          $image={linkIcon}
          onClick={() => copy(`${import.meta.env.VITE_API_URL}${location.pathname}`)}
        />
        <S.SnsBtn color="--Yellow-50" $image={kakaoIcon} onClick={shareKakao} />
        <S.SnsBtn color="--Blue-50" $image={facebookIcon} onClick={shareFacebook} />
      </S.BtnContainer>
    </S.UserInfo>
    // 문자열의 프롭스를 전달받을땐 {}를 사용하지않고 ""를 사용한다네요 {color} -> "color"로 변경하였습니다.
  );
}

UserProfile.propTypes = {
  copy: PropTypes.func.isRequired,
};

export default UserProfile;
