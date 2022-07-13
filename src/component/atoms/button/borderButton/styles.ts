import styled, { css } from 'styled-components'
import { getSize } from '../helper'

function getBorderColor(borderColor: string) {
  switch (borderColor) {
    case 'black':
      return css`
        background-color: #fff;
        color: #222;
        border: 2px solid #222;
      `
    case 'gray':
      return css`
        background-color: #fff;
        color: #222;
        border: 2px solid #ededed;
      `
    case 'blue':
      return css`
        background-color: #fff;
        color: #0028ac;
        border: 2px solid #0028ac;
      `
    case 'green':
      return css`
        background-color: #fff;
        color: #222;
        border: 2px solid #00c01e;
      `
  }
}

export const BtnWrap = styled('button')<{
  contentWitdh: string
  borderColor: string
  size: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => getBorderColor(props.borderColor)}
  ${(props) => getSize(props.size)}

  width: ${(props) => props.contentWitdh};

  border-radius: 4px;
  font-weight: 500;
`
