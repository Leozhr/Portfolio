import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }
`