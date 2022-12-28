import { createContext, useState } from 'react'

import { User, UserContextData } from './types'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const UserContext = createContext({} as UserContextData)

interface Props {
  children: JSX.Element
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: ''
  })

  function changeUser (name: string): void {
    setUser({
      name
    })
  }

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  )
}
