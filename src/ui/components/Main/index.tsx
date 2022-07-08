import LogoSVG from 'assets/svg/LogoSVG'
import * as S from './styles'

const Main = ({ title = '안녕하세요.', description = 'g-project입니다.' }) => (
  <S.Wrapper>
    <S.Logo>{/* <LogoSVG /> */}</S.Logo>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
