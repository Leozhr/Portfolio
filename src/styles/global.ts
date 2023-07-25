import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    width: 100%;
    background: ${theme.color.light};
    font-family: ${theme.font.family.poppins};
    font-weight: 700;
    animation: pause 5s linear forwards;
  }

  @keyframes pause {
    0% {
      overflow: hidden;
    }
    100% {
      overflow: inherit;
    }
  }

  h1, h2, p, span {
    font-weight: 500;
    color: ${theme.color.dark};
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

  .container {
    max-width: 90%;
    margin: 0 auto;
  }
`