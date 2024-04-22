import axiosinstance from '../utils/axios';

/**
 * 답변 삭제하기
 *
 * @author yum
 * @date 23.04
 * @param answerId
 * @return
 */
export const deleteAnswer = async (answerId) => {
  try {
    await axiosinstance.delete(`/answers/${answerId}/`);
    return { error: null, loading: false };
  } catch (error) {
    return { error: error, loading: false };
  }
};
