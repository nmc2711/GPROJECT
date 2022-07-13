import { ReactNode } from 'react'

import Header from 'component/header'

import { Layout, Contents } from './styles'

type LayoutTypes = 'basic' | 'headLess' | 'footerLess'

type LayoutProps = {
  layoutType?: LayoutTypes
  paddingTop?: number
  paddingBottom?: number
  children: ReactNode
}

const LayoutComponent = ({
  layoutType = 'basic',
  paddingTop,
  paddingBottom,
  children
}: LayoutProps) => {
  return (
    <Layout>
      {layoutType !== 'headLess' && <Header />}
      <Contents paddingTop={paddingTop} paddingBottom={paddingBottom}>
        {children}
      </Contents>
      {layoutType !== 'footerLess' && <div>푸터입니다.</div>}
    </Layout>
  )
}
export default LayoutComponent
