import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: #000000;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-family: Pacifico, cursive;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    cursor: pointer;
  }
  
  input, button {
    font-family: inherit;
  }
`;