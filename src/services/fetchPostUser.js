import axiosInstance from '../utils/axios';

const fetchPostUser = async (name) => {
  const data = {
    name: `${name}`,
    team: '5-11',
  };
  try {
    const response = await axiosInstance.post('/subjects/', data, {
      'Content-Type': 'application/json',
    });
    localStorage.setItem('questionId', response.data.id);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

export default fetchPostUser;
