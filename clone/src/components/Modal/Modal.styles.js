import styled from "styled-components";

export const ModalGroup = styled.div`
    background-color: var(--darkGrey);
    border-radius: 10px;
    width: 850px;
    margin: 60px auto 0;
`;
export const Details = styled.div`
    z-index: 100;
    max-width: 700px;
    padding: 20px 100px 20px 30px;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);
    p{
        font-size: var(--fontSmall);

        @media screen and (max-width: 720px){
            font-size: var(--fontSmall);
        }
    }

`;

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, rgba(0,0,0,0)
        41%, var(--darkGrey)
        100%
    ),
    url(${({image}) => image}), var(--darkGrey);
    background-size: 100%, cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    height: 30em;
    padding-left: 20px;
    position: relative;
    animation: animateHeroImage 1s;

    button.close{
        border-radius: 50%;
        height: 40px;
        width: 40px;
        margin-top:10px;
        margin-right: 10px;
        background-color: var(--darkGrey);
        color: var(--white);
        border: 1px solid var(--white);
        float: right;
    }
    .exit{
        font-size: var(--fontBig);
        font-weight: lighter;
        margin: 0 auto;
    }

    @keyframes animateHeroImage{
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }

`;
export const Content = styled.div`
    padding-top: 50px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;
export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    padding: 150px 100px 0 0;
    bottom: 40px;
    margin-right: 20px;
    height: 250px;
    min-height: 100px;
    color: var(--white);

    h1{
        margin-top: 10px;
        text-shadow: rgb(0,0,0) 0px 0px 1px;
        -webkit-font-smoothing: antialiased;
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px){
            font-size: var(--fontBig);
        }
    }

    p{
        font-size: var(--fontMed);

        @media screen and (max-width: 720px){
            font-size: var(--fontSmall);
        }
    }

    button{
        font-size: var(--fontSmall);
        font-weight: bold;
        border: none;
        border-radius: 3px;
        padding: 8px 25px;
        margin: 0 10px 0 0;
        height: 40px;
    }

    .video{
        background-color: rgb(255,255,255);
        :hover{
            opacity: 0.8;
        }
    }
    @media screen and (max-width: 720px){
        resize: none;
    }
`;
