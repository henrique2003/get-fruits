import { useContext } from 'react'
import { ScrollView } from 'react-native'

import { RouteNames } from '../../routes/types'
import theme from '../../theme'
import * as S from './styles'
import { BasketItem } from '../../components'
import { BasketContext } from '../../context/basket'

interface Props {
  navigation: {
    navigate: (screen_name: RouteNames) => void
  }
}

export const Basket: React.FC<Props> = ({ navigation }) => {
  const { basket } = useContext(BasketContext)

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Title>Minha cesta</S.Title>
        </S.Header>
        <S.GoBack
          onPress={() => navigation.navigate('Market')}
        >
          <S.GoBackArrow
            size={16}
            color={theme.COLORS.BLUE}
            weight="bold"
          />
          <S.GoBackText>Voltar</S.GoBackText>
        </S.GoBack>
        <ScrollView>
          {basket.length > 0 && basket.map(fruitSalad => (
            <BasketItem
              key={fruitSalad.id}
              bgColor={fruitSalad.bgColor}
              image={fruitSalad.image}
              price={fruitSalad.price}
              quantify={1}
              text={fruitSalad.title}
            />
          ))}
        </ScrollView>
      </S.Content>
      <S.Footer>
        <S.TotalContainer>
            <S.TotalText>Total</S.TotalText>
          <S.TotalPrice>
            <S.TotalPriceIcon size={20} />
            <S.TotalPriceText>60,000</S.TotalPriceText>
          </S.TotalPrice>
        </S.TotalContainer>
        <S.CheckoutButton
          activeOpacity={0.8}
        >
          <S.CheckoutButtonText>Finalizar</S.CheckoutButtonText>
        </S.CheckoutButton>
      </S.Footer>
    </S.Container>
  )
}
