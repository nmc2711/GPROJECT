import reset from 'styled-reset'

import { createGlobalStyle, css } from 'styled-components'

interface Fonts {
  fontName: string
  weights: [number, string][]
  src: string
}

const fonts: Fonts = {
  fontName: 'GmarketSans',
  weights: [
    [300, 'Light'],
    [500, 'Medium'],
    [700, 'Bold']
  ],
  src: '/font/'
}

const fontFace = (font: Fonts) => {
  return font.weights.map(([weight, weightStr]) => {
    return css`
      @font-face {
        font-family: ${font.fontName};
        font-weight: ${weight};
        src: url('${font.src}${font.fontName}${weightStr}.ttf'),
          url('${font.src}${font.fontName}${weightStr}.otf');
      }
    `
  })
}

const GlobalStyles = createGlobalStyle`
  ${reset};
  ${fontFace(fonts)};

  /* @font-face {
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
  } */
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
    font-family: "GmarketSans";
  }
`

export default GlobalStyles
