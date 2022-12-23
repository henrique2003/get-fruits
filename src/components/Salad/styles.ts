import { CurrencyNgn, Heart, Plus } from 'phosphor-react-native'
import styled from 'styled-components/native'

export type BgColor = '#fbfbfb' | '#FFFAEB' | '#FEF0F0' | '#F1EFF6'

type ContainerProps = {
  bgColor: BgColor
}

export const Container = styled.View<ContainerProps>`
  max-width: 180px;
  height: 195px;
  width: 100%;
  border-radius: 20px;
  margin-right: 20px;
  padding: 15px;
  justify-content: space-between;
  background-color: ${({ bgColor }) => bgColor};
`

export const LikeIcon = styled(Heart)`
  margin-left: auto;
`

interface SaladImageProps {
  width?: string
  height?: string
  mgTop?: string
}

export const SaladImage = styled.Image<SaladImageProps>`
  width: ${({ width }) => width ? `${width}` : '80px'};
  height: ${({ height }) => height ? `${height}` : '80px'};
  margin: auto;
  margin-top: ${({ mgTop }) => mgTop ? `${mgTop}` : '-15px'};;
`

export const Title = styled.Text`
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`

export const PriceConainer = styled.View`
  flex-direction: row;
`

export const DollarSignIcon = styled(CurrencyNgn)`
  margin-right: 4px;
  margin-top: 3px;
`

export const Price = styled.Text`
  color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 4px;
`

export const PlusButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.ORANGE_LIGHT};
  border-radius: 40px;
  width: 25px;
  height: 25px;
`

export const PlusIcon = styled(Plus)`

`
