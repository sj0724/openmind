import axiosInstance from '../utils/axios';

const handleSend = async (text, setModal, subjectId) => {
  try {
    const response = await axiosInstance.post(`/subjects/${subjectId}/questions/`, {
      content: text,
    });

    setModal(false);
    return response.data;
  } catch (error) {
    setModal(false);
  }
};

export default handleSend;
