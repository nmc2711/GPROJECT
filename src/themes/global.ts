import reset from 'styled-reset'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: "gmarketSans";
    src: url("/font/GmarketSansLight.otf");
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
