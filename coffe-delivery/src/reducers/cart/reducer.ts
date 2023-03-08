import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Product {
 
  id: string
  tag: string
  description: string
  price: number
  quantity: number
  image: string


}

export interface RemoveProduct { 

  id: string
  quantity: number
}
 


interface CartState {
  cartListProducts: Product[]
  
}

export function cartReducer(state: CartState, action: any) {

  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }
     // console.log(state, action)
      return produce(state, (draft) => {
        console.log('chegou no reducer')
        draft.cartListProducts.push(action.payload.product)
        /*draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id*/
      })

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, interruptedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }

      const productIndex = state.cartListProducts.findIndex((product) => {
        return product.id === action.payload.productid
      })

      if (productIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        
        draft.cartListProducts.splice(productIndex, 1) 
      })
    }

    /*
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }*/

    default:
      return state
  }
}
