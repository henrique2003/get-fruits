import { ScrollView } from 'react-native'
import { RouteNames } from '../../routes/types'
import theme from '../../theme'
import * as S from './styles'
import { BasketItem } from '../../components'
import { melon_salad, quinoa_salad, tropical_fruit_salad } from '../../assets'

interface Props {
  navigation: {
    navigate: (screen_name: RouteNames) => void
  }
}

export const Basket: React.FC<Props> = ({ navigation }) => {
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
          <BasketItem
            bgColor='#FFFAEB'
            image={{
              source: quinoa_salad
            }}
            price="20,000"
            quantify={3}
            text="Quinoa"
          />
          <BasketItem
            bgColor='#F1EFF6'
            image={{
              source: melon_salad,
              height: '40px',
              width: '60px'
            }}
            price="20,000"
            quantify={2}
            text="Melão"
          />
          <BasketItem
            bgColor='#FEF0F0'
            image={{
              source: tropical_fruit_salad,
              height: '30px',
              width: '60px'
            }}
            price="20,000"
            quantify={2}
            text="Tropical"
          />
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
