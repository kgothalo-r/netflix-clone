import React from 'react';
import { useParams } from 'react-router';
import { useDataFetch } from '../hooks/useDataFetch';
import { Wrapper } from './Movie.styles';

const Movie = () => {
    const {id} = useParams();
    const {state} = useDataFetch(id);

    console.log(state);
    return (
        <Wrapper>
            <h2>Thank You for Visiting</h2>
            Title {id} Not Available
        </Wrapper>

    )
};

export default Movie;