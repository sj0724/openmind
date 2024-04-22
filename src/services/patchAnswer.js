import axiosinstance from '../utils/axios';

/**
 * 답변 수정하기
 *
 * @author yum
 * @date 23.04
 * @param answerId, answer, isRejected
 * @return { id, questionId, content, isRejected, createdAt }
 */
export const patchAnswer = async (answerId, answer, isRejected) => {
  try {
    const response = await axiosinstance.patch(`/answers/${answerId}/`, {
      content: answer,
      isRejected: isRejected,
    });

    return { error: null, loading: false, data: response.data };
  } catch (error) {
    return { error: error, loading: false, data: null };
  }
};
