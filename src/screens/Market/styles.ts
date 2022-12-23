import { MagnifyingGlass } from 'phosphor-react-native'

import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  padding: 30px 0;
  height: 100%;
  background: ${({ theme }) => theme.COLORS.WHITE};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 30px;
`

export const ButtonMenu = styled.TouchableOpacity`
  margin-top: 15px;
`

export const Menu = styled.Image`
  width: 30px;
  height: 15px;
`

export const ButtonBasket = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

export const Basket = styled.Image`
  width: 35px;
  height: 35px;
`

export const TextBasket = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Title = styled.Text`
  margin-top: 30px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  max-width: 280px;
  padding: 0 30px;
`

export const Span = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const ContainerInput = styled.View`
  padding: 0 30px;
`

export const TextInput = styled.TextInput`
  margin-top: 30px;
  height: 55px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREY};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  padding: 0 20px;
  padding-left: 55px;
`

export const SearchIcon = styled(MagnifyingGlass)`
  margin-top: -36px;
  margin-left: 19px;
`

export const Subtitle = styled.Text`
  margin-top: 50px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SXL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  padding: 0 30px;
`

export const RecomendedSlide = styled.ScrollView`
  margin-top: 20px;
  padding: 0 30px;
  max-height: 210px;
`

export const FiltersContainer = styled.ScrollView`
  padding: 0 30px;
  margin-top: 50px;
  max-height: 50px;
`

export const FilterSlide = styled.ScrollView`
  margin-top: 15px;
  padding: 0 30px;
  max-height: 210px;
`
