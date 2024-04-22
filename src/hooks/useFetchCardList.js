import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchCardList from '../services/fetchCardList';
/* 함수가 단일이라면 export default로 내보내고, 함수가 여러개라면 export로 내보낸다는 규칙때문에 fetchCardList를 변경하고
   수정함에 있어 import {fetchCardList로} 에서 fetchCardList로 변경하였습니다. */

export const useFetchCardList = (limit, offset, sort) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = parseInt(searchParams.get('page'), 10) || 1;
    setCurrentPage(page); // 페이지가 변경되면 현재 페이지를 업데이트
  }, [searchParams]);

  useEffect(() => {
    const fetchCardListData = async () => {
      try {
        const calculatedOffset = (currentPage - 1) * limit;

        const response = await fetchCardList(limit, calculatedOffset, sort);
        setCards(response.results);
        setLoading(false);
      } catch (error) {
        // console.log('Error fetching card list:', error);
        setLoading(false);
      }
    };

    fetchCardListData();
  }, [limit, sort, currentPage, searchParams]);

  return {
    cards,
    loading,
    currentPage,
    setCurrentPage,
  };
};

export default useFetchCardList;
