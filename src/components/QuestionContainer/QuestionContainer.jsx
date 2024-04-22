import PropTypes from 'prop-types';
import MessageIcon from '../../assets/Messages.svg';
import * as S from './QuestionContainer.styled';

function QuestionContainer({ children, count }) {
  return (
    <S.Container>
      <S.QuestionCount>
        <img src={MessageIcon} alt="MessageIcon" />
        {count}
        개의 질문이 있습니다.
      </S.QuestionCount>
      {children}
    </S.Container>
  );
}

QuestionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
};

export default QuestionContainer;
