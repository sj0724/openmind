import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetchUser from '../../hooks/useFetchUser';
import useFetchQuestionList from '../../hooks/useFetchQuestionList';

import QuestionContainer from '../../components/QuestionContainer/QuestionContainer';
import PostAnswer from '../../components/PostAnswer/PostAnswer';
import UserProfile from '../../components/UserProfile/UserProfile';
import Toast from '../../components/Toast/Toast';

import * as S from '../QuestionList/QuestionList.styled';
import * as SAL from './AnswerList.styled';

import UserContext from '../../utils/contexts/UserContext';

import emptyIcon from '../../assets/emptyIcon.svg';
import mainLogo from '../../assets/logo.svg';

/** 작업완료 후 주석은 다 지울 예정 */
function AnswerList() {
  const { id } = useParams();

  // 유저정보
  const { user } = useFetchUser(id);

  const endRef = useRef(true);
  const obsRef = useRef(true);
  const preventRef = useRef(true);
  const [listOffset, setListOffset] = useState(0);
  const { data, question } = useFetchQuestionList(id, listOffset);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (endRef.current && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setListOffset((prev) => prev + 2);
      preventRef.current = true;
    }
  };

  // 질문 및 답변 목록
  const [toast, setToast] = useState(false);

  // 링크 공유
  const copyUrl = async (url) => {
    await navigator.clipboard.writeText(url);
    setToast(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <S.Header>
        <S.HeaderLogo src={mainLogo} alt="mainLogo" />
        <S.HeaderImage />
      </S.Header>
      <UserContext.Provider value={user}>
        <UserProfile copy={copyUrl} />
        <S.Body>
          <QuestionContainer count={data?.count || 0}>
            {data?.count ? (
              question.map((item) => <PostAnswer question={item} key={item.id} />)
            ) : (
              <S.NoQuestion src={emptyIcon} />
            )}
          </QuestionContainer>
        </S.Body>
        <S.PageEnd ref={obsRef} />
        {toast && <Toast setToast={setToast} text="URL이 복사되었습니다." />}
      </UserContext.Provider>
    </>
  );
}

export default AnswerList;
