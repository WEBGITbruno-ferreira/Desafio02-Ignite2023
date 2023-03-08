import { Product, RemoveProduct } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  REFRESH_CART_TOTAL = 'REFRESH_CART_TOTAL'
  //criar um totalizador do carrinho
}

export function addNewProductToCartAction(product: Product) {

 
  return { type: ActionTypes.ADD_ITEM_TO_CART, payload: { product } }
}

export function removeProductFromCartAction(removeProduct: RemoveProduct) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART, payload: { removeProduct }
  }
}


export function refreshCartTotal() {
  return {
    type: ActionTypes.REFRESH_CART_TOTAL
  }
}
/*
export function interruptCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
*/