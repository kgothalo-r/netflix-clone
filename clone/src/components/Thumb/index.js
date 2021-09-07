import React from 'react';
import { Image } from './Thumbs.styles';
import { Link } from 'react-router-dom';

const Thumb = ({image, id, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${id}`}>
                <Image src={image} alt='movie thumbnail' />
            </Link>
            
        ) : (
            <Image src={image} alt='movie thumbnail' />
        )}
    </div>
)

export default Thumb;