import React from 'react';
import { Wrapper,Content, Image } from './Grid.styles';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

const Grid = ({poster, header, children}) => {
    const breakPoints = [
        {width: 1, itemsToShow: 1.5},
        {width: 500, itemsToShow: 3.5},
        {width: 768, itemsToShow: 4.5},
        {width: 1200, itemsToShow: 5.5},
        {width: 1400, itemsToShow: 7.5},
    ]
    return (
        <Wrapper>
            <h2 id='explore'>{header}</h2>
            <Carousel breakPoints={breakPoints}>
                    {children && children.map(child => (
                        <Content className='thumnHover' key = {child.props.id}>
                            {child.props.clickable ? (
                            <Link to={`/${child.props.id}`}>
                                <Image className={poster === 'MEDIUM' ? '.medium' : 'large'} src ={child.props.image} alt='movie thumbnail'/>
                            </Link>)
                            : (
                                <Image className={poster === 'MEDIUM' ? '.medium' : 'large'} src={child.props.image} alt='movie thumbnail'/>
                            )}
                        </Content>
                    ))
                    }
            </Carousel>
        </Wrapper>
    )
}

export default Grid;