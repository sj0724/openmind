import useAsync from '../hooks/useAsync';
import axiosinstance from '../utils/axios';

/**
 * 특정 유저 정보 불러오기
 *
 * @author yum
 * @date 23.04
 * @param
 * @return { id, name, imageSource, qeustionCount, createdAt }
 */
export const getSubject = (id) => {
  const subject = () => axiosinstance.get(`/subjects/${id}/`);
  const { error, loading, data } = useAsync(subject);

  return { error, loading, data };
};
