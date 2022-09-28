import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :focus {
        outline: 0; //tirando o focus azul que o chrome poe por padrao
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']} //colocando um focus verde com o box-shadow
    }

    body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-front-smoothing: antialiased;
    }   

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }
`;