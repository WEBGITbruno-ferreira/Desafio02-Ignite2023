import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'


interface CreateCartData {
  task: string
  minutesAmount: number
}

interface CartContextType {
 data ?: any
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartContextProviderProps) 
{

    let data = { }

  return (
    <CartContext.Provider
      value={ data}
    >
      {children}
    </CartContext.Provider>
  )
}
