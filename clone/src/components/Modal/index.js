import React from "react";
import { Wrapper, Content, Text, Details, ModalGroup} from "./Modal.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MovieModal = ({image, title, text, play, setModalClose}) =>{
    return (
        <ModalGroup>
            <Wrapper image ={image}>
            <button className='close' onClick={setModalClose}><FontAwesomeIcon className='exit' icon={faTimes} /></button>
                <Content>
                    <Text>
                        <h1>{title}</h1>
                        <button className="video"><FontAwesomeIcon icon={faPlay} />{play}</button>
                    </Text>
                </Content>
            </Wrapper>
            <Details>
                <p>{text}</p>
            </Details>
        </ModalGroup>
    );
}

export default MovieModal