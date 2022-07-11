import reset from 'styled-reset'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: "gmarketSans";
    font-weight: 300;
    src: url("/font/GmarketSansLight.otf");
  }
  @font-face {
    font-family: "gmarketSans";
    font-weight: 500;
    src: url("/font/GmarketSansMedium.otf");
  }
  @font-face {
    font-family: "gmarketSans";
    font-weight: 700;
    src: url("/font/GmarketSansBold.otf");
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: "gmarketSans";
  }
`

export default GlobalStyles
