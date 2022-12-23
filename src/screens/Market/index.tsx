import * as S from './styles'
import { menu, basket } from '../../assets'
import theme from '../../theme'
import { Salad } from '../../components/Salad'

export const Market: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.ButtonMenu
          activeOpacity={0.8}
        >
          <S.Menu source={menu} />
        </S.ButtonMenu>
        <S.ButtonBasket
          activeOpacity={0.8}
          >
          <S.Basket source={basket} />
          <S.TextBasket>Minha cesta</S.TextBasket>
        </S.ButtonBasket>
      </S.Header>
      <S.Title>
        <S.Span>Olá Henrique</S.Span>, qual combo de salada de frutas você quer hoje?
      </S.Title>
      <S.ContainerInput>
        <S.TextInput
          placeholder='Procure pela sua salada de fruta'
        />
        <S.SearchIcon
          size={20}
          color={theme.COLORS.DARK_OPACITY}
        />
      </S.ContainerInput>
      <S.Subtitle>Combos recomendados</S.Subtitle>
      <S.RecomendedSlide
        horizontal
        alwaysBounceHorizontal
      >
        <Salad />
        <Salad />
        <Salad />
      </S.RecomendedSlide>
    </S.Container>
  )
}
