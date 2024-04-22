import axiosInstance from '../utils/axios';

const fetchQuestionList = async ({ subjectsId, limit, offset }) => {
  const query = `?limit=${limit}&offset=${offset}`;
  try {
    const response = await axiosInstance.get(`/subjects/${subjectsId}/questions/${query}`);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

export default fetchQuestionList;
