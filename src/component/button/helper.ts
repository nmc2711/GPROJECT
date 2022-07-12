import { css } from 'styled-components'

export function getSize(size: string) {
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
