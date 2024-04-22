import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import thumbsUp from '../../assets/thumbs-up.svg';
import thumbsUpSelect from '../../assets/thumbs-up-blue.svg';
import thumbsDown from '../../assets/thumbs-down.svg';
import thumbsDownSelect from '../../assets/thumbs-down-red.svg';
import Answer from '../Answer/Answer';
import * as S from './Question.styled';
import calculateDate from '../../utils/calculateDate';
import postLike from '../../services/postLike';
// svg파일 같은 경우도 카멜케이스를 권장한다고 해서 파일명을 변경하였습니다.
function Question({ question }) {
  const [answer] = useState(question.answer);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [createdTime, setCreatedTime] = useState({});
  const [likeCount, setLikeCount] = useState(question.like);
  const [disLikeCount, setDisLikeCount] = useState(question.dislike);

  const toggleThumbs = () => {
    if (like) {
      setLike(!like);
      setDisLike(like);
    } else if (disLike) {
      setDisLike(!disLike);
      setLike(disLike);
    }
  };

  const handleLike = () => {
    if (like) {
      setLike(!like);
      return;
    }
    setLikeCount(likeCount + 1);
    setLike(!like);
    toggleThumbs();
    postLike({ id: question.id, type: 'like' });
  };

  const handleDisLike = () => {
    if (disLike) {
      setDisLike(!disLike);
      return;
    }
    setDisLikeCount(disLikeCount + 1);
    setDisLike(!disLike);
    toggleThumbs();
    postLike({ id: question.id, type: 'dislike' });
  };

  const createdText = ` ・ ${createdTime.time}${createdTime.result}전`;

  useEffect(() => {
    const nowDate = new Date();
    const createdDate = new Date(question.createdAt);
    const date = (nowDate - createdDate) / 1000;
    setCreatedTime(calculateDate(date));
  }, [question.createdAt]);

  return (
    <S.QuestBody>
      <S.QuestionStatus $complete={question.answer}>
        {question.answer ? '답변 완료' : '미답변'}
      </S.QuestionStatus>
      <S.QuestionContent>
        <S.Time>
          질문
          {createdText}
        </S.Time>
        <S.QuestionDetail>{question.content}</S.QuestionDetail>
      </S.QuestionContent>
      {answer && <Answer answer={answer} />}
      <S.QuestionModal>
        <S.ThumbnsBtn onClick={handleLike} color={like ? '--Blue-50' : null}>
          <img src={like ? thumbsUpSelect : thumbsUp} alt="up" />
          <span>좋아요</span>
          {likeCount}
        </S.ThumbnsBtn>
        <S.ThumbnsBtn onClick={handleDisLike} color={disLike ? '--Red-50' : null}>
          <img src={disLike ? thumbsDownSelect : thumbsDown} alt="down" />
          <span>싫어요</span>
          {disLikeCount}
        </S.ThumbnsBtn>
      </S.QuestionModal>
    </S.QuestBody>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    content: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    dislike: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    answer: PropTypes.object.isRequired,
  }).isRequired,
};

export default Question;
