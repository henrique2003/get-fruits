import { Platform } from 'react-native'
import { useState, useContext } from 'react'

import * as S from './styles'
import { basket_of_fruits_2 } from '../../assets'
import { RouteNames } from '../../routes/types'
import { UserContext } from '../../context/user'

interface Props {
  navigation: {
    navigate: (screen_name: RouteNames) => void
  }
}

export const Authentication: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('')

  const { changeUser } = useContext(UserContext)

  function submit (): void {
    if (!name) return

    changeUser(name)

    navigation.navigate('Market')
  }

  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.BasketContainer>
        <S.BasketOfFruits source={basket_of_fruits_2} />
      </S.BasketContainer>
      <S.WelcomeContainer>
        <S.Title>Qual é o seu nome?</S.Title>
        <S.TextInput
          placeholder='Kante'
          onChangeText={(e) => setName(e)}
        />
        <S.Button
          activeOpacity={0.8}
          onPress={() => submit()}
        >
          <S.TextButton>Começar</S.TextButton>
        </S.Button>
      </S.WelcomeContainer>
    </S.Container>
  )
}
