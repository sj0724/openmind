import { useContext, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import useModal from '../../hooks/useModal';
import * as S from './Modal.styled';
import messagesIcon from '../../assets/messages-black.svg';
import xMark from '../../assets/x-mark.svg';
import UserContext from '../../utils/contexts/UserContext';
import handleSend from '../../services/fetchPostQuestion';

function Modal({ setModal, onNewQuestion }) {
  const [text, setText] = useState('');
  const user = useContext(UserContext);
  const modalRef = useRef();

  useModal(setModal, modalRef);

  const { id: subjectId } = useParams();

  const sendQuestion = useCallback(() => {
    handleSend(text, setModal, subjectId).then((newQuestion) => {
      onNewQuestion(newQuestion);
    });
  }, [text, setModal, subjectId, onNewQuestion]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        sendQuestion();
      }
    },
    [sendQuestion],
  );

  return (
    <S.StyledModal>
      <S.ModalWrapper ref={modalRef}>
        <S.Header>
          <div>
            <img src={messagesIcon} alt="Modal창 header 좌측 메시지모양 아이콘" />
            <span>질문을 작성하세요</span>
          </div>
          <button type="button" onClick={() => setModal(false)}>
            <img src={xMark} alt="Modal창 header 우측 X마크모양 아이콘" />
          </button>
        </S.Header>
        <S.ToUser>
          <span>To.</span>
          <S.Profile image={user.imageSource} />
          <p>{user.name}</p>
        </S.ToUser>
        <S.Content>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="내용을 입력해주세요"
          />
        </S.Content>
        <S.Footer
          color={text.length > 0 ? 'var(--Brown-40)' : 'var(--Brown-30)'}
          onClick={sendQuestion}>
          <span>질문 보내기</span>
        </S.Footer>
      </S.ModalWrapper>
    </S.StyledModal>
  );
}

Modal.propTypes = {
  setModal: propTypes.func.isRequired,
  onNewQuestion: propTypes.func.isRequired,
};

export default Modal;
