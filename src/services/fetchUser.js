import axiosInstance from '../utils/axios';

const fetchUser = async (id) => {
  try {
    const response = await axiosInstance.get(`/subjects/${id}/`);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

export default fetchUser;
