import { CaretLeft, CurrencyNgn } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Footer = styled.View`
  padding: 35px 30px;
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  border-top-style: solid;
`

export const TotalContainer = styled.View`
  padding-right: 15px;
  margin-top: 5px;
`

export const TotalText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const TotalPrice = styled.View`
  flex-direction: row;
  margin-top: 5px;
  padding-right: 10px;
`

export const TotalPriceIcon = styled(CurrencyNgn)`
  margin-right: 5px;
`

export const TotalPriceText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const CheckoutButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 10px;
  flex: 1;
  height: 55px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`

export const CheckoutButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Content = styled.View`
  flex: 1;
`

export const Header = styled.View`
  padding: 60px 30px 45px 30px;
  background: ${({ theme }) => theme.COLORS.ORANGE};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SXL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
`

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  margin: 30px;
  margin-top: 20px;
`

export const GoBackArrow = styled(CaretLeft)`
  margin-right: 3px;
  margin-top: 1px;
`

export const GoBackText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
