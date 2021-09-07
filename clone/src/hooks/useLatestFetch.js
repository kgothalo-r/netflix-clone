import { useState, useEffect } from "react";
import axios from 'axios'

export const useLatestFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=1926db5a40fd48c26a4b6852bb32f657&language=en-US`).then((result) => {
            setData(result.data)
        })
    },[]);

    return [data];
}