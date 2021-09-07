import {useState, useEffect} from "react";
import axios from 'axios'

export const useDataFetch = (point) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${point}?api_key=1926db5a40fd48c26a4b6852bb32f657&language=en-US`).then((result) => {
            setData(result.data)
        })
    },[point]);

    return [data];
}