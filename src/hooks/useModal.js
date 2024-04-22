import { useEffect } from 'react';

function useModal(setModal, modalRef) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [setModal, modalRef]);
}

export default useModal;
