import { useContext, useEffect } from 'react'

import { RouteNames } from '../../routes/types'
import theme from '../../theme'
import * as S from './styles'
import { BasketContext } from '../../context/basket'

interface Props {
  navigation: {
    navigate: (screen_name: RouteNames) => void
  }
}

export const Congratulations: React.FC<Props> = ({ navigation }) => {
  const { removeAllItem } = useContext(BasketContext)

  useEffect(() => {
    removeAllItem()
  }, [])

  return (
    <S.Container>
      <S.Center>
        <S.SuccessContainer>
          <S.SuccessCheckContainer>
            <S.CheckIcon
              size={40}
              color={theme.COLORS.WHITE}
              weight="bold"
            />
          </S.SuccessCheckContainer>
        </S.SuccessContainer>
        <S.Title>Meus Parabéns!</S.Title>
        <S.Subtitle>Sua entrega já está sendo feita, aguarde e ela logo chegará até você</S.Subtitle>
        <S.ContinueBuy
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Market')}
        >
          <S.ContinueBuyText>Continuar comprando</S.ContinueBuyText>
        </S.ContinueBuy>
      </S.Center>
    </S.Container>
  )
}
