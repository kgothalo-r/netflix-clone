import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    margin: 0 auto;
    padding: 0 30px;

    h2{
        color: var(--white);
        margin: 5px 0;
        padding-left: 10px;
        font-size: larger;
    }

    button.rec-dot{
        border-radius: 0;
        margin: 0.1px;
        width: 25px;
        height: 5px;
        box-shadow: var(--white);
        color: var(--white);
    }
    div.rec-pagination{
/*         margin: 5px auto;
        width: 200px; */
        display: none;
    }
    button.rec.rec-arrow:disabled {
        visibility: hidden;
    }
    button.rec.rec-arrow {
        color: transparent;
        background-color: transparent;
        outline: none;
        font-size: var(--fontSuperBig);
        border-radius: 0;
        border: none;
        height: 90%;

        :hover{
            opacity: 0.8;
        }
        :active{
            background-color: transparent;
            outline: none;
        }
    }
    button.rec.rec-arrow {
        box-shadow: none;

        :hover{
            background-color: transparent;
            color: var(--white);
        }
    }

    @media screen and (max-width: 768px){
        font-size: var(--fontBig)
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: fit-content;

    .large{
        width: 250px;
        height: 480px;
        border-radius: 3px;
        :hover{
            border-radius: 10px;
        }
    }

    :hover{
        transform: scale(2.5) !important;
        margin-left: 5px;
        margin-right: 5px;
    }
`;

export const Image = styled.img`
    width: 250px;
    height: 150px;
    max-width: 600px;
    margin: 25px  5px 10px 5px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 3px;
    animation: animateThumb 0.5s;

    :hover{
        opacity: 0.8;
        transform: scale(0.5) !important;
    }

`;

