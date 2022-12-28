import { createContext, useState } from 'react'

import { Basket, BasketContextData, IFruitSalad } from './types'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const BasketContext = createContext({} as BasketContextData)

interface Props {
  children: JSX.Element
}

export const BasketProvider: React.FC<Props> = ({ children }) => {
  const [basket, setBasket] = useState<Basket>([])

  function addItem (item: IFruitSalad): void {
    setBasket([...basket, item])
  }

  function removeItem (id: string): void {
    setBasket(basket.filter(item => item.id !== id))
  }

  function removeAllItem (): void {
    setBasket([])
  }

  return (
    <BasketContext.Provider value={{
      basket,
      addItem,
      removeItem,
      removeAllItem
    }}>
      {children}
    </BasketContext.Provider>
  )
}
