import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    float: right;
    height: 30px;
    border: 1px solid transparent;
    padding: 0 20px;
    .icon {
        position: absolute;
        left: 10px;
        top: 3px;
        width: 20px;
        height: 20px;
        color: var(--lightGrey);
    }
`;
export const Content = styled.div`
    border: 1px solid var(--lightGrey);
    width: 250px;
    height: 30px;
    background-color: var(--darkGrey);
    margin: 0 auto;
    color: var(--lightGrey);
    position: absolute;
    right: 1em;

    .icon {
        left: 10px;
        top: 3px;
        width: 20px;
        height: 20px;
    }

    input{
        border: none;
        height: 30px;
        margin-left:3rem;
        padding: 5px;
        background-color: transparent;
        color: var(--lightGrey);
        font: var(--fontSmall);
        cursor: pointer;

        :focus{
            outline: none;
        }
    }


`;