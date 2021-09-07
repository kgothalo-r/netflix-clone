import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 100px 200px 10px;
    color: #808080;
    font-size: 13px;
    height: fit-content;

    button{
        font-size: 13px;
        padding: 6.5px;
        width: 95px;
        height: 30px;
        background-color: transparent;
        border: 1px solid #808080;
        color: #808080;
        margin-bottom: 10px;
    }

    p{
        font-size: 12px;
    }

    th{
        text-align: left;
    }

    img{
        margin-right: 15px;
    }
`;

export const Table = styled.table`
    width: 100%;
    margin-bottom: 20px;
`;
export const TableRow = styled.tr`
    
`;
export const TableContent = styled.td`
    padding: 10px;
    padding-left: 0;
`;