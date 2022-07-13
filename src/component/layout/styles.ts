import styled from 'styled-components'

export const Layout = styled.main`
  height: 100%;
`

export const Contents = styled.div<{
  paddingBottom?: number
  paddingTop?: number
}>`
  padding-top: ${({ paddingTop }) => paddingTop || 0}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0}px;
`
