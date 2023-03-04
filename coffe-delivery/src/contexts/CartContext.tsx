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

interface CartsContextType {
 data ?: any
}

interface CartsContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartsContextType)

export function CartsContextProvider({
  children,
}: CartsContextProviderProps) {

    let data = { }

  return (
    <CartContext.Provider
      value={ data}
    >
      {children}
    </CartContext.Provider>
  )
}
