import * as S from './styles'
import theme from '../../theme'
import { ImageSourcePropType, View } from 'react-native'

interface Props {
  id: string
  title: string
  image: {
    source: ImageSourcePropType
    height?: string
    width?: string
    mgTop?: string
  }
  bgColor: S.BgColor
  price: string
}

export const Salad: React.FC<Props> = ({
  title,
  image,
  bgColor,
  price
}) => {
  return (
    <S.Container bgColor={bgColor}>
      <View>
        <S.LikeIcon size={22} color={theme.COLORS.ORANGE} />
        <S.SaladImage
          source={image.source}
          width={image.width}
          height={image.height}
          mgTop={image.mgTop}
        />
      </View>
      <View>
        <S.Title>{title}</S.Title>
        <S.Actions>
          <S.PriceConainer>
            <S.DollarSignIcon
              size={20}
              color={theme.COLORS.ORANGE}
            />
            <S.Price>
              {price}
            </S.Price>
          </S.PriceConainer>
          <S.PlusButton
            activeOpacity={0.7}
          >
            <S.PlusIcon
              size={15}
              color={theme.COLORS.ORANGE}
            />
          </S.PlusButton>
        </S.Actions>
      </View>
    </S.Container>
  )
}
