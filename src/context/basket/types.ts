import { ImageSourcePropType } from 'react-native'

import { BgColor } from '../../components/FruitSalad/styles'

export interface ResponseBasket {
  data: Basket
}

export interface IFruitSalad {
  id: string
  bgColor: BgColor
  title: string
  price: string
  isInBasket?: boolean
  image: {
    source: ImageSourcePropType
    width?: string
    height?: string
    mgTop?: string
  }
  categorys?: string[]
}

export type Basket = IFruitSalad[]

export type BasketContextData = {
  basket: Basket
  addItem: (item: IFruitSalad) => void
  removeItem: (id: string) => void
  removeAllItem: () => void
}
