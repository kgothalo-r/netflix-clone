import React, { useState } from 'react';
import Modal from 'react-modal';
import { Wrapper, Content, Text } from './HeroImage.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import MovieModal from '../Modal/index';
import './modalstyle.css';

const HeroImage = ({image, title, text, play, info}) => {
    const [state, setState] = useState(false);

    const setModalOpen =()=>{
        setState(!state);
    }
    const setModalClose =()=>{
        setState(!state);
    }

    return (
        <Wrapper image ={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <button className="video"><FontAwesomeIcon icon={faPlay} />{play}</button>
                    <button className="info" onClick={setModalOpen}><FontAwesomeIcon icon={faInfoCircle} />{info}</button>
                    <Modal isOpen = {state} onRequestClose={()=> setModalOpen(false)} className='modal-component'>
                        <MovieModal image = {image} title={title} text={text} play={play} setModalClose={setModalClose}/>
                    </Modal>
                </Text>
            </Content>
        </Wrapper>
    );
}

export default HeroImage;