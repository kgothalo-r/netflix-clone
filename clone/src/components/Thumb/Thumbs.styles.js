import styled from "styled-components";

export const Image = styled.img`
    width: fit-content;
    height: fit-content;
    margin: 25px  5px 10px 5px;
    transition: all 0.3s;
    object-fit: cover;
    animation: animateThumb 0.5s;

    :hover{
        opacity: 0.8;
        
    }
    @keyframes animateThumb{
        from {
            opacity: 0;
        } to{
           opacity : 1;
        }
    }
`;

