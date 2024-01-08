import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Verdana, Arial, sans-serif;
        color: #222;
        font-size: 14px;
        line-height: 18px;
        background-color: var(--bg-color);
    }

    /* Responsive */
    @media screen and (min-width: 1024px) { 
        .container {
        width: 980px;
        margin: 0 auto;
        }
    }
`;