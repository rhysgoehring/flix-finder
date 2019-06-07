import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { Gunmetal } from "./Colors";

const GlobalStyles = createGlobalStyle`
  ${normalize()};
  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    background: ${Gunmetal};
    color: white;
  }

  main {
    padding: 2rem;
  }
`;

export default GlobalStyles;
