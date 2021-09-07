import { useState, useEffect } from 'react';
import axios from 'axios';

export const useTrendingFetch = () => {

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=1926db5a40fd48c26a4b6852bb32f657').then((result) => {
      setTrending(result.data)
    })
  },[])

  return [trending]
};
