import styled from 'styled-components/native'

export const Container = styled.View`
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

export const Description = styled.Text`
  margin-top: 15px;
  color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 10px;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  margin-top: 30px;
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
