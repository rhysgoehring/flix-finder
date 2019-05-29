import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { Gunmetal } from "./Colors";

const GlobalStyles = createGlobalStyle`
  ${normalize()};
  * {
    margin: 0;
    padding: 0;
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
`;

export default GlobalStyles;
