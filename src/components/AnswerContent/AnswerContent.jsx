import { useContext, useEffect, useState } from 'react';

import * as S from '../Answer/Answer.styled';
import * as SAC from './AnswerContent.styled';

import UserContext from '../../utils/contexts/UserContext';
import calculateDate from '../../utils/calculateDate';

import { postAnswer } from '../../services/postAnswer';

function PostAnswer({ answer, questionId }) {
  const [createdTime, setCreatedTime] = useState({});
  const [createdText, setCreatedText] = useState('');

  const [answerText, setAnswerText] = useState('');
  const [submittedAnswer, setSubmittedAnswer] = useState('');

  useEffect(() => {
    if (answer) {
      setSubmittedAnswer(answer.content || '');
      setAnswerText('');
    }
  }, [answer]);

  // 입력된 답변이 있으면 비활성화된 버튼 활성화 상태로 변경
  const handleAnswerChange = (event) => {
    const newText = event.target.value;
    setAnswerText(newText);
  };

  // 답변 등록
  const handleSubmitAnswer = async () => {
    if (!window.confirm('답변을 등록하시겠습니까?')) {
      return false;
    }

    const { error, loading, data } = await postAnswer(questionId, answerText, false);

    if (loading) {
      console.log('답변 등록 중');
    } else if (error) {
      console.error('답변 등록 실패', error);
    } else if (data) {
      setSubmittedAnswer(data.content || ''); // 등록된 답변의 내용으로 업데이트

      // 등록된 답변이 즉시 UI에 반영되도록 추가
      setAnswerText('');
    }
  };

  useEffect(() => {
    if (answer) {
      const nowDate = new Date();
      const createdDate = new Date(answer.createdAt);
      const date = (nowDate - createdDate) / 1000;
      setCreatedTime(calculateDate(date));
    }
  }, [answer]);

  useEffect(() => {
    if (createdTime.time && createdTime.result) {
      setCreatedText(` ・ ${createdTime.time}${createdTime.result}전`);
    } else {
      setCreatedText('');
    }
  }, [createdTime]);

  return (
    <S.AnswerContainer>
      <S.Profile $image={user.imageSource} />
      <S.AnswerContent>
        <S.Answerinfo>
          <S.UserName>{user.name}</S.UserName>
          <S.AnswerTime>{createdText}</S.AnswerTime>
        </S.Answerinfo>
        <SAC.WrapAnswerContent>
          {submittedAnswer ? (
            <SAC.AnswerText $rejected={answer.isRejected}>
              {answer.isRejected ? '답변 거절' : submittedAnswer}
            </SAC.AnswerText>
          ) : (
            <>
              <SAC.AnswerTextarea
                placeholder="답변을 입력해주세요"
                value={answerText || ''}
                onChange={(event) => handleAnswerChange(event)}></SAC.AnswerTextarea>
              <SAC.AnswerButton
                $bgColor={answerText?.trim() ? '--Brown-40' : '--Brown-30'}
                onClick={() => handleSubmitAnswer()}
                disabled={!answerText?.trim()}>
                답변 완료
              </SAC.AnswerButton>
            </>
          )}
        </SAC.WrapAnswerContent>
      </S.AnswerContent>
    </S.AnswerContainer>
  );
}

export default PostAnswer;
