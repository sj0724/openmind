import { useState, useEffect } from 'react';
import fetchUser from '../services/fetchUser';

function useFetchUser(id) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardListData = async () => {
      try {
        const response = await fetchUser(id);
        setUser(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCardListData();
  }, [id]);

  return { user, loading };
}

export default useFetchUser;
