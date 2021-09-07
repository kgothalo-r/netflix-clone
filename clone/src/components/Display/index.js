import React from "react";
import { POSTER_SIZE } from "../../config";
import Grid from "../Grid";
import Thumb from "../Thumb";

const DisplayData = ({poster, header ,elements, IMAGE_BASE_URL, BACKDROP_SIZE, NoImage}) => (
    <Grid poster={poster} header={header} children={elements}>
            { elements.page === 1 && elements.results.map(data => (
                poster === 'MEDIUM' ?(
                <Thumb 
                key={data.id}
                clickable
                image = {
                    data.backdrop_path ?
                        IMAGE_BASE_URL +  BACKDROP_SIZE + data.backdrop_path
                        :
                        NoImage
                }
                id= {data.id}
                />)
                : (
                    <Thumb 
                    key={data.id}
                    clickable
                    image = {
                        data.poster_path ?
                            IMAGE_BASE_URL +  POSTER_SIZE + data.poster_path
                            :
                            NoImage
                    }
                    id= {data.id}
                    />)
            ))}
        </Grid>
)

export default DisplayData;