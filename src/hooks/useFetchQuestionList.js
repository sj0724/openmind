import { useState, useEffect } from 'react';
import fetchQuestionList from '../services/fetchQuestionList';

const LIMIT = 2;

function useFetchQuestionList(id, listOffset) {
  const [data, setData] = useState({});
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(true);

  const addQuestion = (newQuestion) => {
    setQuestion((prev) => [newQuestion, ...prev]);
    setData((prevData) => ({ ...prevData, count: prevData.count + 1 }));
  };

  useEffect(() => {
    const option = {
      subjectsId: id,
      limit: LIMIT,
      offset: listOffset,
    };
    const fetchCardListData = async () => {
      try {
        const response = await fetchQuestionList(option);
        setData(response);
        setQuestion((prev) => [...prev, ...response.results]);
        if (data.next === null) {
          setNext(false);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCardListData();
  }, [id, listOffset]);

  return {
    data,
    question,
    loading,
    addQuestion,
    next,
  };
}

export default useFetchQuestionList;
