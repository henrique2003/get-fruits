import * as S from './styles'
import {
  menu,
  basket,
  honey_lime,
  berry_mango,
  melon_salad,
  tropical_fruit_salad
} from '../../assets'
import theme from '../../theme'
import { Salad } from '../../components/Salad'

export const Market: React.FC = () => {
  return (
    <S.Container
      contentContainerStyle={{
        paddingBottom: 45
      }}
    >
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
        contentContainerStyle={{
          paddingBottom: 15
        }}
        >
        <Salad
          bgColor='#fbfbfb'
          id='12321'
          image={{
            source: honey_lime
          }}
          price="2,000"
          title="Limão"
        />
        <Salad
          bgColor='#fbfbfb'
          id='12322'
          image={{
            source: berry_mango
          }}
          price="8,000"
          title="Manga e amora"
          />
      </S.RecomendedSlide>
      <S.FiltersContainer
        horizontal
        alwaysBounceHorizontal
        contentContainerStyle={{
          paddingBottom: 15
        }}
        >
        <S.TextFilterContainer>
          <S.TextFilter active={true}>Em alta</S.TextFilter>
          <S.SpanBottom active={true} />
        </S.TextFilterContainer>
        <S.TextFilterContainer>
          <S.TextFilter active={false}>Popular</S.TextFilter>
          <S.SpanBottom active={false} />
        </S.TextFilterContainer>
        <S.TextFilterContainer>
          <S.TextFilter active={false}>Novidades</S.TextFilter>
          <S.SpanBottom active={false} />
        </S.TextFilterContainer>
        <S.TextFilterContainer>
          <S.TextFilter active={false}>Gourmet</S.TextFilter>
          <S.SpanBottom active={false} />
        </S.TextFilterContainer>
      </S.FiltersContainer>
      <S.FilterSlide
        horizontal
        alwaysBounceHorizontal
        contentContainerStyle={{
          paddingBottom: 15
        }}
        >
      <Salad
        bgColor='#FFFAEB'
        id='12323'
        image={{
          source: honey_lime
        }}
        price="10,000"
        title="Quinoa"
        />
      <Salad
        bgColor='#FEF0F0'
        id='12324'
        image={{
          source: tropical_fruit_salad,
          width: '100px',
          height: '50px',
          mgTop: '5px'
        }}
        price="10,000"
        title="Tropical"
        />
      <Salad
        bgColor='#F1EFF6'
        id='12325'
        image={{
          source: melon_salad,
          width: '100px',
          height: '60px',
          mgTop: '5px'
        }}
        price="10,000"
        title="Melão"
        />
      </S.FilterSlide>
    </S.Container>
  )
}
