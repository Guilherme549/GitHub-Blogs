import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        font-family: "Nunito", serif;
        background-color: ${props => props.theme.colors["base-background"]};
        color: ${props => props.theme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    button {
        border: none;
        cursor: pointer;
    }
`