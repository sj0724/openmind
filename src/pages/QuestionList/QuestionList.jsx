import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Question from '../../components/Question/Question';
import QuestionContainer from '../../components/QuestionContainer/QuestionContainer';
import * as S from './QuestionList.styled';
import emptyIcon from '../../assets/emptyIcon.svg';
import mainLogo from '../../assets/logo.svg';
import arrowUp from '../../assets/Arrow-up.svg';
import arrowLeft from '../../assets/Arrow-left.svg';
import UserProfile from '../../components/UserProfile/UserProfile';
import Toast from '../../components/Toast/Toast';
import Modal from '../../components/Modal/Modal';
import useFetchUser from '../../hooks/useFetchUser';
import useFetchQuestionList from '../../hooks/useFetchQuestionList';
import UserContext from '../../utils/contexts/UserContext';

function QuestionList() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const { user } = useFetchUser(id);
  const [toast, setToast] = useState(false);
  const obsRef = useRef(null);
  const preventRef = useRef(true);
  const [listOffset, setListOffset] = useState(0);
  const { data, question, next, addQuestion } = useFetchQuestionList(id, listOffset);
  const navigate = useNavigate();

  const handleObserver = (entries) => {
    const target = entries[0];
    if (next && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setListOffset((prev) => prev + 2);
      preventRef.current = true;
    }
  };

  const handleModalToggle = () => {
    setModal(!modal);
  };

  const handleNewQuestion = (newQuestion) => {
    addQuestion(newQuestion); // Modify this line
  };

  const copyUrl = async (url) => {
    await navigator.clipboard.writeText(url);
    setToast(true);
  };

  const moveTop = () => {
    window.scrollTo(0, 0);
  };

  const movePrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [next]);

  return (
    <>
      <S.Header>
        <S.HeaderLogo src={mainLogo} alt="mainLogo" />
        <S.HeaderImage />
      </S.Header>
      <UserContext.Provider value={user}>
        <UserProfile copy={copyUrl} />
        <S.Body>
          <QuestionContainer count={data.count}>
            {data.count ? (
              question.map((item) => <Question question={item} key={item.id} />)
            ) : (
              <S.NoQuestion src={emptyIcon} />
            )}
          </QuestionContainer>
        </S.Body>
        <S.PageEnd ref={obsRef} />
        <S.PageButtons>
          <S.UpButton onClick={moveTop}>
            <img src={arrowUp} alt="위로가기화살표" />
          </S.UpButton>
          <S.PrevButton onClick={movePrev}>
            <img src={arrowLeft} alt="뒤로가기화살표" />
            <p>뒤로가기</p>
          </S.PrevButton>
        </S.PageButtons>
        <S.FloatingBtn onClick={handleModalToggle}>질문 작성하기</S.FloatingBtn>
        {toast && <Toast setToast={setToast} text="URL이 복사되었습니다." />}
        {modal && <Modal setModal={setModal} onNewQuestion={handleNewQuestion} />}
      </UserContext.Provider>
    </>
  );
}

export default QuestionList;
