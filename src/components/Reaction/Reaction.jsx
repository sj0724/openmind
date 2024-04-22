import { useState } from 'react';
import * as S from './Reaction.styled';

import postLike from '../../services/postLike';

import thumbsUp from '../../assets/thumbs-up.svg';
import thumbsUpSelect from '../../assets/thumbs-up-blue.svg';
import thumbsDown from '../../assets/thumbs-down.svg';
import thumbsDownSelect from '../../assets/thumbs-down-red.svg';

function Reaction({ question }) {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

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

  return (
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
  );
}

export default Reaction;
