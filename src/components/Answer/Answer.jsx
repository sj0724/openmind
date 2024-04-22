import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Answer.styled';
import UserContext from '../../utils/contexts/UserContext';
import calculateDate from '../../utils/calculateDate';

function Answer({ answer }) {
  const user = useContext(UserContext);
  const [createdTime, setCreatedTime] = useState({});

  const createdText = ` ・ ${createdTime.time}${createdTime.result}전`;

  useEffect(() => {
    const nowDate = new Date();
    const createdDate = new Date(answer.createdAt);
    const date = (nowDate - createdDate) / 1000;
    setCreatedTime(calculateDate(date));
  }, [answer.createdAt]);

  return (
    <S.AnswerContainer>
      <S.Profile $image={user.imageSource} />
      <S.AnswerContent $rejected={answer.isRejected}>
        <S.Answerinfo>
          <S.UserName>{user.name}</S.UserName>
          <S.AnswerTime>{createdText}</S.AnswerTime>
        </S.Answerinfo>
        <p>{answer.isRejected ? '답변 거절' : answer.content}</p>
      </S.AnswerContent>
    </S.AnswerContainer>
  );
}

Answer.propTypes = {
  answer: PropTypes.shape({
    isRejected: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Answer;
