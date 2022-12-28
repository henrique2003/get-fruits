import { CurrencyNgn } from 'phosphor-react-native'
import styled from 'styled-components/native'

export type BgColor = '#fbfbfb' | '#FFFAEB' | '#FEF0F0' | '#F1EFF6'

export const Container = styled.View`
  width: 100%;
  padding-bottom: 25px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  border-bottom-style: solid;
  margin-top: 25px;
  margin-bottom: 10px;
`

export const Flex = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

type ImageContainerProps = {
  bgColor: BgColor
}

export const ImageContainer = styled.View<ImageContainerProps>`
  width: 85px;
  height: 85px;
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  padding: 15px;
`

interface SaladImageProps {
  width?: string
  height?: string
  mgTop?: string
}

export const Image = styled.Image<SaladImageProps>`
  width: 100%;
  height: ${({ height }) => height ? '35px' : '100%'};
`

export const TextContainer = styled.View`
  margin-left: 15px;
  justify-content: center;
`

export const Title = styled.Text`
  margin-top: 3px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Quantify = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 5px;
`

export const Price = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-right: 15px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
`

export const PriceIcon = styled(CurrencyNgn)`
  margin-right: 5px;
`

export const PriceText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
