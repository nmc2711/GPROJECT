import styled, { css } from 'styled-components'

function getBgColor(themes: string) {
  switch (themes) {
    case 'green':
      return css`
        background-color: #00c01e;
        color: #fff;
        &:hover {
          background-color: rgba(0, 192, 30, 0.9);
        }
      `
    case 'white':
      return css`
        background-color: #fff;
        color: #222;
        &:hover {
          background-color: rgba(0, 0, 0, 0.9);
        }
      `
    case 'blue':
      return css`
        background-color: #0028ac;
        color: #fff;
        &:hover {
          background-color: rgba(0, 40, 172, 0.9);
        }
      `
  }
}

function getSize(size: string) {
  switch (size) {
    case 's':
      return css`
        height: 24px;
        font-size: 12px;
      `
    case 'm':
      return css`
        height: 32px;
        font-size: 14px;
      `
    case 'l':
      return css`
        height: 40px;
        font-size: 16px;
      `
    case 'xl':
      return css`
        height: 48px;
        font-size: 18px;
      `
    case 'xxl':
      return css`
        height: 56px;
        font-size: 20px;
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

  ${(props) => getBgColor(props.themes)}
  ${(props) => getSize(props.size)}

  width: ${(props) => props.contentWitdh};

  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.4s ease;
`
