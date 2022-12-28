import { View, ImageSourcePropType } from 'react-native'

import * as S from './styles'

interface Props {
  image: {
    source: ImageSourcePropType
    height?: string
    width?: string
    mgTop?: string
  }
  bgColor: S.BgColor
  text: string
  quantify: number
  price: string
}

export const BasketItem: React.FC<Props> = ({
  image,
  bgColor,
  text,
  quantify,
  price
}) => {
  return (
    <S.Container>
      <S.Flex>
        <S.Flex>
          <View>
            <S.ImageContainer bgColor={bgColor}>
              <S.Image
                source={image.source}
                width={image.width}
                height={image.height}
              />
            </S.ImageContainer>
          </View>
          <S.TextContainer>
            <S.Title>{text}</S.Title>
            <S.Quantify>{quantify} pacote(s)</S.Quantify>
          </S.TextContainer>
        </S.Flex>
        <S.Price>
          <S.PriceIcon weight='bold' size={20} />
          <S.PriceText>{price}</S.PriceText>
        </S.Price>
      </S.Flex>
    </S.Container>
  )
}
