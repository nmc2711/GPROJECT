import styled from 'styled-components'

export const LayoutWrapper = styled.main<{
  paddingBottom?: number
  paddingTop?: number
}>`
  padding-top: ${({ paddingTop }) => paddingTop || 0}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0}px;
`
