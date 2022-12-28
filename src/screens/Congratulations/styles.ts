import { Check } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Center = styled.View`
  max-width: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const SuccessContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  width: 150px;
  height: 150px;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
`

export const SuccessCheckContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  width: 90px;
  height: 90px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`

export const CheckIcon = styled(Check)`

`

export const Title = styled.Text`
  margin-top: 40px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SXL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE};
`

export const Subtitle = styled.Text`
  margin-top: 15px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLUE};
  max-width: 270px;
  line-height: 28px;
`

export const ContinueBuy = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
  max-width: 200px;
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-style: solid;
  margin-top: 50px;
`

export const ContinueBuyText = styled.Text`
  color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
