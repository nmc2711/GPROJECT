import * as S from './styles'
import { BasicButton, BorderButton, TextButton } from 'component/button'

export default function Detail() {
  return (
    <div>
      <h1>Detail</h1>
      <BasicButton contentWitdh="240px">구매하기</BasicButton>
      <BorderButton contentWitdh="240px" borderColor="blue" size="xl">
        저장하기
      </BorderButton>
      <TextButton contentWitdh="240px" themes="green" size="xl">
        판매하기
      </TextButton>
    </div>
  )
}
