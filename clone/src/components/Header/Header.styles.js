import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1;
    height: 65px;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    padding: 11px 0;
    .active{
        font-weight: bold;
    }
`;

export const Nav = styled.div`
    display: inline-block;
    padding: 0 20px;
    text-align: center;
    justify-content: center;
    height: 100%;
`;
export const Navigation = styled.ul`
    display: inline-block;
    color: var(--white);
    margin: 0;
    margin-left: 0.3em;
    height: fit-content;
`;

export const Explore = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 11px 20px 10px;
    margin: 0 0;
    vertical-align: top;

    button{
        margin-left: 5px;
        border: none;
        border-radius: none;
        background-color: transparent;
        color: var(--white);
        font: var(--fontSuperBig);

        :focus{
            outline: none;
        }

        .icon{
            font-size: 20px;
        }

        img.users{
            height: 30px;
            width: auto;
            border-radius: 3px;
        }
    }
`;

export const Menu = styled.div`
    background-color: rgb(0,0,0);
    color: var(--white);
    border-radius: 2px;
    border: 1px solid rgba(191, 191, 191, 1);
    margin-top: 25px;
    opacity: 0.9;
    font-size: 14px;
    width: 180px;

    a{
        font-weight: bold;
        outline: none;
        color: var(--white);
        text-decoration: none;
        margin: 0;
        margin-top: 5px;
        padding: 0;

        .hover{
            text-decoration: underline;
        }
    }

    img.users{
        vertical-align: middle;
        height: 30px;
        width: auto;
        border-radius: 2px;
        margin: 10px;
        margin-bottom: 0;
        margin-right: 0;
    }

    .account{
        width: 100%;
        margin-top: 10px;
        border-top: 1px solid var(--lightGrey);
        padding: 10px 0 10px 10px;
    }
`;

export const MenuItem = styled.div`
    margin-top: 5px;
    span{
        margin-left: 10px;
        padding-bottom: 25px;
    }
    *:hover{
        text-decoration: underline;
    }
`;
export const Notification = styled.div`
    background-color: rgb(0,0,0);
    color: var(--white);
    border-radius: 2px;
    border: 1px solid rgba(191, 191, 191, 1);
    border-top: 4px solid var(--white);
    margin-top: 25px;
    padding: 15px;
    padding-right: 50px;
    opacity: 0.8;
    font-size: var(--fontSmall);
    width: 400px;
    height: 150px;
`;

export const LogoImg = styled.img`
    width: 100px;
    height: 25px;
    vertical-align: middle;
    @media screen and (max-width: 500px){
        width: 100px;
    }
`;
