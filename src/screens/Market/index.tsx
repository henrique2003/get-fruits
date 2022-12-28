import { useState, useEffect, useContext } from 'react'

import * as S from './styles'
import {
  menu,
  basket as basket_image,
  honey_lime,
  berry_mango,
  melon_salad,
  tropical_fruit_salad,
  quinoa_salad
} from '../../assets'
import theme from '../../theme'
import { FruitSalad, TextFilter } from '../../components'
import { RouteNames } from '../../routes/types'
import { IFruitSalad } from '../../context/basket/types'
import { BasketContext } from '../../context/basket'
import { UserContext } from '../../context/user'

interface Props {
  navigation: {
    navigate: (screen_name: RouteNames) => void
  }
}

export const Market: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState('')
  const [combos, setCombos] = useState<IFruitSalad[]>([])
  const [fruitsSalad, setFruitsSalad] = useState<IFruitSalad[]>([])
  const [currentFilter, setCurrentFilter] = useState('Em alta')

  const { basket } = useContext(BasketContext)
  const { user } = useContext(UserContext)

  useEffect(() => {
    function loadCombos (): void {
      let combosData: IFruitSalad[] = [
        {
          id: '1',
          bgColor: '#fbfbfb',
          image: {
            source: honey_lime
          },
          price: '2,000',
          title: 'Limão',
          isInBasket: false
        },
        {
          id: '2',
          bgColor: '#fbfbfb',
          image: {
            source: berry_mango
          },
          price: '8,000',
          title: 'Manga e amora',
          isInBasket: false
        }
      ]

      combosData = combosData.map(item => {
        basket.map(basketItem => {
          if (item.id === basketItem.id) {
            item.isInBasket = true
          }

          return basketItem
        })
        return item
      })

      setCombos(combosData)
    }

    function loadFruitsSalads (): void {
      let fruisSaladsData: IFruitSalad[] = [
        {
          id: '3',
          bgColor: '#FFFAEB',
          image: {
            source: quinoa_salad
          },
          price: '10,000',
          title: 'Quinoa',
          categorys: [
            'Em alta',
            'Popular'
          ],
          isInBasket: false
        },
        {
          id: '4',
          bgColor: '#FEF0F0',
          image: {
            source: tropical_fruit_salad,
            width: '100px',
            height: '50px',
            mgTop: '5px'
          },
          price: '10,000',
          title: 'Tropical',
          categorys: [
            'Em alta',
            'Novidades'
          ],
          isInBasket: false
        },
        {
          id: '5',
          bgColor: '#F1EFF6',
          image: {
            source: melon_salad,
            width: '100px',
            height: '60px',
            mgTop: '5px'
          },
          price: '10,000',
          title: 'Melão',
          categorys: [
            'Em alta',
            'Gourmet'
          ],
          isInBasket: false
        }
      ]

      fruisSaladsData = fruisSaladsData.map(item => {
        basket.map(basketItem => {
          if (item.id === basketItem.id) {
            item.isInBasket = true
          }

          return basketItem
        })
        return item
      })

      setFruitsSalad(fruisSaladsData)
    }

    loadCombos()
    loadFruitsSalads()
  }, [basket])

  function searchFS (): IFruitSalad[] {
    const filterFruitsSalads: IFruitSalad[] = []
    const textSearch = search.toLocaleLowerCase()

    fruitsSalad.map(item => {
      const title = item.title.toLocaleLowerCase()

      if (title.includes(textSearch)) {
        filterFruitsSalads.push(item)
      }
      return item
    })

    combos.map(item => {
      const title = item.title.toLocaleLowerCase()

      if (title.includes(textSearch)) {
        filterFruitsSalads.push(item)
      }
      return item
    })

    return filterFruitsSalads
  }

  const serachFruitSalad = searchFS()

  const flitredCategoryFuitsSalads = fruitsSalad.filter(({ categorys }) => {
    return categorys[0] === currentFilter || categorys[1] === currentFilter
  })

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
          onPress={() => navigation.navigate('Basket')}
          >
          <S.Basket source={basket_image} />
          <S.TextBasket>Minha cesta</S.TextBasket>
        </S.ButtonBasket>
      </S.Header>
      <S.Title>
        <S.Span>Olá {user.name}</S.Span>, qual combo de salada de frutas você quer hoje?
      </S.Title>
      <S.ContainerInput>
        <S.TextInput
          placeholder='Procure pela sua salada de fruta'
          onChangeText={(e) => setSearch(e)}
          value={search}
        />
        <S.SearchIcon
          size={20}
          color={theme.COLORS.DARK_OPACITY}
          />
      </S.ContainerInput>
      {search
        ? (
          <S.SearchContainer>
            <S.SearchMessage>Resultados para "{search}"</S.SearchMessage>
            <S.SearchGrid
              horizontal
              alwaysBounceHorizontal
              contentContainerStyle={{
                paddingBottom: 15,
                paddingRight: 30
              }}
              showsHorizontalScrollIndicator={false}
            >
              {serachFruitSalad.length > 0 && serachFruitSalad.map(item => (
                <FruitSalad
                  key={item.id}
                  id={item.id}
                  bgColor={item.bgColor}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  isInBasket={item.isInBasket}
                />
              ))}
            </S.SearchGrid>
          </S.SearchContainer>
          )
        : (
        <>
          <S.Subtitle>Combos recomendados</S.Subtitle>
          <S.RecomendedSlide
            horizontal
            alwaysBounceHorizontal
            contentContainerStyle={{
              paddingBottom: 15,
              paddingRight: 30
            }}
            showsHorizontalScrollIndicator={false}
            >
            {combos.length > 0 && combos.map(fruitSaladItem => (
              <FruitSalad
                key={fruitSaladItem.id}
                id={fruitSaladItem.id}
                bgColor={fruitSaladItem.bgColor}
                image={fruitSaladItem.image}
                price={fruitSaladItem.price}
                title={fruitSaladItem.title}
                isInBasket={fruitSaladItem.isInBasket}
              />
            ))}
          </S.RecomendedSlide>
          <S.FiltersContainer
            horizontal
            alwaysBounceHorizontal
            contentContainerStyle={{
              paddingBottom: 15,
              paddingRight: 30
            }}
            showsHorizontalScrollIndicator={false}
          >
            <TextFilter
              active={currentFilter === 'Em alta'}
              text='Em alta'
              onPress={() => setCurrentFilter('Em alta')}
            />
            <TextFilter
              active={currentFilter === 'Popular'}
              text='Popular'
              onPress={() => setCurrentFilter('Popular')}
            />
            <TextFilter
              active={currentFilter === 'Novidades'}
              text='Novidades'
              onPress={() => setCurrentFilter('Novidades')}
            />
            <TextFilter
              active={currentFilter === 'Gourmet'}
              text='Gourmet'
              onPress={() => setCurrentFilter('Gourmet')}
            />
          </S.FiltersContainer>
          <S.FilterSlide
            horizontal
            alwaysBounceHorizontal
            contentContainerStyle={{
              paddingBottom: 15,
              paddingRight: 30
            }}
            showsHorizontalScrollIndicator={false}
            >
            {flitredCategoryFuitsSalads.length > 0 && flitredCategoryFuitsSalads.map(fruitSaladItem => (
              <FruitSalad
                key={fruitSaladItem.id}
                id={fruitSaladItem.id}
                bgColor={fruitSaladItem.bgColor}
                image={fruitSaladItem.image}
                price={fruitSaladItem.price}
                title={fruitSaladItem.title}
                isInBasket={fruitSaladItem.isInBasket}
              />
            ))}
          </S.FilterSlide>
        </>
          )}
    </S.Container>
  )
}
