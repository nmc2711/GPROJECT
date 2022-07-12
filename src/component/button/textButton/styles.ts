import styled, { css } from 'styled-components'
import { getSize } from '../helper'

function getTextColor(themes: string) {
  switch (themes) {
    case 'green':
      return css`
        color: #00c01e;
      `
    case 'blue':
      return css`
        color: #0028ac;
      `
    case 'black':
      return css`
        color: #222;
      `
  }
}

export const BtnWrap = styled('button')<{
  contentWitdh: string
  themes: string
  size: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => getTextColor(props.themes)}
  ${(props) => getSize(props.size)}

  width: ${(props) => props.contentWitdh};
  background-color: transparent;
  border-radius: 4px;
  font-weight: 500;
`
