import * as S from './styles'
import theme from '../../theme'
import { honey_lime } from '../../assets'

export const Salad: React.FC = () => {
  return (
    <S.Container bgColor='#fbfbfb'>
      <S.LikeIcon size={22} color={theme.COLORS.ORANGE} />
      <S.SaladImage source={honey_lime} />
      <S.Title>Combinação de limão</S.Title>
      <S.Actions>
        <S.PriceConainer>
          <S.DollarSignIcon
            size={20}
            color={theme.COLORS.ORANGE}
          />
          <S.Price>2,000</S.Price>
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
    </S.Container>
  )
}
