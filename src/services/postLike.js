import axiosInstance from '../utils/axios';

const postLike = async ({ id, type }) => {
  const data = {
    type: `${type}`,
  };
  try {
    const response = await axiosInstance.post(`/questions/${id}/reaction/`, data, {
      'Content-Type': 'application/json',
    });
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

export default postLike;
