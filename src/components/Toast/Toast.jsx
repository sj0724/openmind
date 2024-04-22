import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ToastBody from './Toast.styled';

function Toast({ setToast, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastBody>
      <p>{text}</p>
    </ToastBody>
  );
}

Toast.propTypes = {
  setToast: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Toast;
