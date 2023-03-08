import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Product {
 
  id: string
  tag: Array<string>
  name: string
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




function refreshCarList (draftList : Array<Product>) {


    const listGroupedByItem = draftList.reduce((soma, cur) => {
        // guarda o nome atual e verifica se existe repetido
        let nome = cur.name;
        let repetido = soma.find(elem => elem.name === nome)
        // se for repetido soma, caso contrário adiciona o elemento ao novo array
        if (repetido) {
            repetido.quantity   += cur.quantity; 
            repetido.totalPrice = cur.price * cur.quantity;}
        else {
            let totalizerList = {...cur, totalPrice : cur.price * cur.quantity }
            soma.push(totalizerList); }
        // retorna o elemento agrupado e somado

        //console.log("soma", soma)
        return soma;
    }, []);

   
 return listGroupedByItem
}

export function cartReducer(state: CartState, action: any) {

  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
    
      return produce(state, (draft) => {
  
        console.log('ADD_ITEM')
        draft.cartListProducts.push(action.payload.product)        
      })

    case ActionTypes.SUB_ITEM_FROM_CART: {

      //console.log("REMOVE", state)
      const productIndex = state.cartListProducts.findIndex((product) => {
        console.log('action.payload.id', action.payload.removeProduct.id)
        console.log('product.id', product.id)
        return product.id === action.payload.removeProduct.id
      })
        console.log(productIndex)
      if (productIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        
        draft.cartListProducts[productIndex].quantity -= action.payload.removeProduct.quantity
      })
    }

    case ActionTypes.REFRESH_CART_TOTAL: {
      
      return produce(state, (draft) => {
        alert('refreshHHH')
        console.log('REFH', state)
        draft.cartListProducts = refreshCarList(draft.cartListProducts)
      })
    }


    case ActionTypes.REMOVE_ITEM_FROM_CART: {

      //console.log("REMOVE", state)
      const productIndex = state.cartListProducts.findIndex((product) => {
        console.log('action.payload.id', action.payload.removeProduct.id)
        console.log('product.id', product.id)
        return product.id === action.payload.removeProduct.id
      })
        console.log(productIndex)
      if (productIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        
        draft.cartListProducts.splice(productIndex, 1) 
      })
    }

    case ActionTypes.REFRESH_CART_TOTAL: {
      
      return produce(state, (draft) => {
    
        console.log('REFH', state)
        draft.cartListProducts = refreshCarList(draft.cartListProducts)
      })
    }




    default:
      return state
  }
}
