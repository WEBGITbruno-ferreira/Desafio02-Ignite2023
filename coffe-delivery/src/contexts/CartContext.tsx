import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  ActionTypes,
  addNewProductToCartAction,
  removeProductFromCartAction, 
  refreshCartTotal

} from '../reducers/cart/actions'

import { Product, cartReducer, RemoveProduct } from '../reducers/cart/reducer'



interface CartContextType {
  cartListProducts : Product[]
  addProduct: (data : Product)=> void, 
  removeProduct: (data: RemoveProduct) =>void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartContextProviderProps) 
{

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartListProducts: [],
      
    },

  
    (initialState) => {
//      const storedStateAsJson = localStorage.getItem(
//        '@ignite-timer:cycles-state-1.0.0',
//      )
//
//      if (storedStateAsJson) {
//        return JSON.parse(storedStateAsJson)
//      }
//
//      return initialState

return  initialState
    },
  )


    const { cartListProducts }= cartState;


    function addProduct (data : Product) {

      const productToAdd : Product = {
        id: data.id,
        tag: data.tag,
        description: data.description,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        image: data.image

      }

      console.log("xxxxx", productToAdd)

      dispatch(addNewProductToCartAction(productToAdd))
      dispatch(refreshCartTotal())
      

    }

    function removeProduct (data : RemoveProduct) {
      const productToRemove : RemoveProduct = {
        id: data.id,
        quantity: data.quantity

      }

      dispatch(removeProductFromCartAction(productToRemove))
      dispatch(refreshCartTotal())
    }

  return (
    <CartContext.Provider
      value={ {cartListProducts, addProduct, removeProduct } }
    >
      {children}
    </CartContext.Provider>
  )
}
