import { useContext, useState } from 'react'
import { ImageSourcePropType, View } from 'react-native'
import { Minus, Plus } from 'phosphor-react-native'

import * as S from './styles'
import theme from '../../theme'
import { BasketContext } from '../../context/basket/index'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
  isInBasket?: boolean
}

export const FruitSalad: React.FC<Props> = ({
  id,
  title,
  image,
  bgColor,
  price,
  isInBasket
}) => {
  const [loadAction, serLoadAction] = useState(false)
  const [liked, setLiked] = useState(false)

  const { addItem, removeItem } = useContext(BasketContext)

  function clickAction (): void {
    serLoadAction(true)

    if (isInBasket) {
      removeItem(id)
    } else {
      addItem({
        id,
        title,
        image,
        bgColor,
        price,
        isInBasket
      })
    }

    serLoadAction(false)
  }

  return (
    <S.Container bgColor={bgColor}>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setLiked(!liked)}
        >
          {liked
            ? (
                <S.LikeIcon
                  size={22}
                  color={theme.COLORS.ORANGE}
                  weight="fill"
                />
              )
            : (
                <S.LikeIcon
                  size={22}
                  color={theme.COLORS.ORANGE}
                />
              )}
        </TouchableOpacity>
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
            <S.DollarSignIcon size={20} color={theme.COLORS.ORANGE} />
            <S.Price>{price}</S.Price>
          </S.PriceConainer>
          <S.PlusButton
            activeOpacity={0.7}
            onPress={() => clickAction()}
            disabled={loadAction}
          >
            {isInBasket
              ? (
              <Minus size={15} color={theme.COLORS.ORANGE} />
                )
              : (
              <Plus size={15} color={theme.COLORS.ORANGE} />
                )}
          </S.PlusButton>
        </S.Actions>
      </View>
    </S.Container>
  )
}
