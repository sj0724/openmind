import axiosinstance from '../utils/axios';

/**
 * 답변 작성하기
 *
 * @author yum
 * @date 23.04
 * @param questionId, answer, isRejected
 * @return { id, questionId, content, isRejected, createdAt }
 */
export const postAnswer = async (questionId, answer, isRejected) => {
  try {
    const response = await axiosinstance.post(`/questions/${questionId}/answers/`, {
      content: answer,
      isRejected: isRejected,
    });

    return { error: null, loading: false, data: response.data };
  } catch (error) {
    return { error: error, loading: false, data: null };
  }
};
