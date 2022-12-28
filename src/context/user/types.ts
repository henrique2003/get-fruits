export interface ResponseBasket {
  data: User
}

export interface User {
  name: string
}

export type UserContextData = {
  user: User
  changeUser: (name: string) => void
}
