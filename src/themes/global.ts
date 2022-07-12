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

  button {
    padding: 0; 
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0; 
    overflow: visible;
    cursor: pointer;
  }
`

/**
 * @explain : ttf는 2차원 베지어 방식, otf는 3차원 베지어 방식 표현속도는 ttf가 높지만 3차원 곡선인 otf가 깔끔한 해상도 제공. 이외 다른 타입들은 압축정도의 차이
 */

export default GlobalStyles
