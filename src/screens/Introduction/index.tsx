import * as S from './styles'
import { basket_of_fruits_1 } from '../../assets'

export const Introduction: React.FC = () => {
  return (
    <S.Container>
      <S.BasketContainer>
        <S.BasketOfFruits source={basket_of_fruits_1} />
      </S.BasketContainer>
      <S.WelcomeContainer>
        <S.Title>Compre combos de saladas de frutas!</S.Title>
        <S.Description>Nosso delivery é o melhor em fazer saladas de frutas frequinhas para você!!!</S.Description>
        <S.Button
          activeOpacity={0.8}
        >
          <S.TextButton>Bora continuar</S.TextButton>
        </S.Button>
      </S.WelcomeContainer>
    </S.Container>
  )
}
