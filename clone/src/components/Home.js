import React from "react";
import { POSTER_SIZE, BACKDROP_SIZE,IMAGE_BASE_URL} from "../config";
import NoImage from '../images/no_image.jpg';
import HeroImage from "./HeroImage/index";
import DisplayData from "./Display";
import {useDataFetch} from '../hooks/useDataFetch';
import {useTrendingFetch } from "../hooks/useTrendingFetch";
import { useLatestFetch } from "../hooks/useLatestFetch";



const Home = () => {
    const LARGE = 'LARGE';
    const MEDIUM = 'MEDIUM';
    const POPULAR_MOVIES = 'movie/popular';
    const POPULAR_SHOWS = 'tv/popular';
    const [movies] = useDataFetch(POPULAR_MOVIES);
    const [shows] = useDataFetch(POPULAR_SHOWS);
    const [trending] = useTrendingFetch();
    const [latest] = useLatestFetch();

    console.log(latest)
    return (
        <>
            {movies.page === 1 && movies.results[0] ? (
                <HeroImage 
                    image= {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
                    title= {movies.results[0].original_title}
                    text= {movies.results[0].overview}
                    play= "&ensp;Play"
                    info= "&ensp;More Info"
                /> 
            ): null }
            <DisplayData poster={MEDIUM} header='Trending Now' elements={trending} IMAGE_BASE_URL={IMAGE_BASE_URL} BACKDROP_SIZE={BACKDROP_SIZE} NoImage={NoImage}/>
            <DisplayData poster={MEDIUM} header='Top Movies in South Africa' elements={movies} IMAGE_BASE_URL={IMAGE_BASE_URL} BACKDROP_SIZE={BACKDROP_SIZE} NoImage={NoImage}/>
            <DisplayData poster={MEDIUM} header='Popular TV Shows' elements={shows} IMAGE_BASE_URL={IMAGE_BASE_URL} BACKDROP_SIZE={BACKDROP_SIZE} NoImage={NoImage}/>
            <DisplayData poster={LARGE} header='Only on Netflix Clone' elements={latest} IMAGE_BASE_URL={IMAGE_BASE_URL} BACKDROP_SIZE={POSTER_SIZE} NoImage={NoImage}/>
        </>
    )
}

export default Home;

