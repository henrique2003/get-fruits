import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  justify-content: space-between;
`

export const BasketContainer = styled.View`
  padding: 30px 20px;
  max-width: 500px;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const BasketOfFruits = styled.Image`
  width: 350px;
  height: 360px;
  text-align: center;
`

export const WelcomeContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 50px 30px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const TextInput = styled.TextInput`
  margin-top: 20px;
  height: 55px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  padding: 0 20px;
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 10px;
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  margin-top: 40px;
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
