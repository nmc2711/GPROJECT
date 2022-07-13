import { BasicButton, BorderButton, TextButton } from 'component/atoms/button'
import Layout from 'component/layout'

export default function Detail() {
  return (
    <Layout paddingTop={40} paddingBottom={60}>
      <BasicButton contentWitdh="240px">구매하기</BasicButton>
      <BorderButton contentWitdh="240px" borderColor="blue" size="xl">
        저장하기
      </BorderButton>
      <TextButton contentWitdh="240px" themes="green" size="xl">
        판매하기
      </TextButton>
    </Layout>
  )
}
