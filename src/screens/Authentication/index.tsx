import { Platform } from 'react-native'

import * as S from './styles'
import { basket_of_fruits_2 } from '../../assets'
import { RoutesName } from '../../routes/types'

interface Props {
  navigation: {
    navigate: (screen_name: RoutesName) => void
  }
}

export const Authentication: React.FC<Props> = ({ navigation }) => {
  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.BasketContainer>
        <S.BasketOfFruits source={basket_of_fruits_2} />
      </S.BasketContainer>
      <S.WelcomeContainer>
        <S.Title>Qual é o seu nome?</S.Title>
        <S.TextInput
          placeholder='Kante'
        />
        <S.Button
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Market')}
        >
          <S.TextButton>Começar</S.TextButton>
        </S.Button>
      </S.WelcomeContainer>
    </S.Container>
  )
}
