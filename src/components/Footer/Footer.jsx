import * as S from './Footer.styled';
import gitHubLogo from '../../assets/github-mark.svg';

function Footer() {
  return (
    <S.Body>
      <S.Container>
        <p>Codeit Sprint BootCamp</p>
        <p>Part2 11Team</p>
        <S.Content href="https://github.com/sj0724/Part2-project" target="_blank">
          Project Github
        </S.Content>
      </S.Container>
      <img src={gitHubLogo} alt="깃허브로고" />
      <S.LinkContainer>
        <S.Content href="https://github.com/khs0727" target="_blank">
          김현서
        </S.Content>
        <S.Content href="https://github.com/sj0724" target="_blank">
          박상준
        </S.Content>
        <S.Content href="https://github.com/JeonYumin94" target="_blank">
          전유민
        </S.Content>
        <S.Content href="https://github.com/yup299" target="_blank">
          최준엽
        </S.Content>
        <S.Content href="https://github.com/hkwangro" target="_blank">
          허찬욱
        </S.Content>
      </S.LinkContainer>
    </S.Body>
  );
}

export default Footer;
