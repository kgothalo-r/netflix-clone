import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 98%;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    }

    body {
        background-color: rgb(20,20,20);
        margin: 0;
        padding: 0;
        min-width:600px;
        width: 100%;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        h1 {
            font-size: 1rem;
            color: var(--white);
        }
    }
`