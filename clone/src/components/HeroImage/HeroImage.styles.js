import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, rgba(0,0,0,0)
        41%, rgb(20,20,20)
        100%
    ),
    url(${({image}) => image}), var(--darkGrey);
    background-size: 100%, cover;
    background-repeat: no-repeat;
    height: 35em;
    padding: 0 30px;
    position: relative;
    animation: animateHeroImage 1s;

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
    max-width: 550px;
    padding: 150px 100px 0 0;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1{
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

    button.video{
        background-color: rgb(255,255,255);
        :hover{
            opacity: 0.8;
        }
    }
    button.info{
        background-color: rgba(109, 109, 110, 0.70);
        color: rgb(255,255,255);
        :hover{
            opacity: 0.8;
        }
    }
    @media screen and (max-width: 720px){
        resize: none;
    }
`;
