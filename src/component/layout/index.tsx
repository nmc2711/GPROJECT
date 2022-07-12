import { ReactNode } from 'react'

import { LayoutWrapper } from './styles'

type LayoutTypes = 'basic' | 'headLess' | 'footerLess'

type LayoutProps = {
  layoutType?: LayoutTypes
  paddingTop?: number
  paddingBottom?: number
  children: ReactNode
}

const Layout = ({
  layoutType = 'basic',
  paddingTop,
  paddingBottom,
  children
}: LayoutProps) => {
  return (
    <LayoutWrapper paddingTop={paddingTop} paddingBottom={paddingBottom}>
      {layoutType !== 'headLess' && <header>헤더입니다.</header>}
      {children}
      {layoutType !== 'footerLess' && <footer>푸터입니다.</footer>}
    </LayoutWrapper>
  )
}
export default Layout
