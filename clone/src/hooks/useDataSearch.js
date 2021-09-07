import {useState, useEffect} from "react";
import axios from 'axios'

export const useDataSearch = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=1926db5a40fd48c26a4b6852bb32f657&language=en-US&query=${search}`).then((result) => {
            setData(result.data)
        })
    },[search]);

    return [data, setSearch];
}