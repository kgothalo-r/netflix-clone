import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

export const useFetchCredits = () => {
    const [id] = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=1926db5a40fd48c26a4b6852bb32f657&language=en-US`).then((result) => {
            setData(result.data)
        })
    },[id]);

    return [data];
}