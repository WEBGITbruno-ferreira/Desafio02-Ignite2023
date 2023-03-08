import {  AlignPrice,  ItemCartContainer, MinusAndPlusSelector, RemoveButton } from './styles'

import {  CreditCard, ShoppingCart, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CardapioItem } from '../cardapio';
import { CartContext } from '../../contexts/CartContext';
import { Product } from '../../reducers/cart/reducer';

export function ItemInCart( props : Product) {

    
    const  { addProduct, removeProduct,cartListProducts} = useContext(CartContext)

    console.log("ItemInCart", cartListProducts)

    function handleAddItem(data : CardapioItem) {
    
        
        addProduct( {
            id: data.id,
            tag: [],
            description: data.description,
            price: data.price,
            quantity: 1,
            image: data.image,
            name: data.name
        })
      
        return 
    }

    function handleSubItem(data : CardapioItem) {
  


        removeProduct({
            id: data.id,    
            quantity: 1     
        })
       
    }




    return (
    <> {/*console.log("Itemincart", props)*/}
    <ItemCartContainer>

        <div className='productImage'> <img src={"src\\assets\\"+props.image+".png"} alt="" /> </div> 
        
        <div>
        <h1> {props.name} </h1>
        <div className="priceAndQuant"> 
        
        <MinusAndPlusSelector className="number">
            <span onClick={() => handleSubItem(props)} className="minus">-</span>
            <input type="text" onChange={()=> {}} value={props.quantity}/>
            <span onClick={() => handleAddItem(props)} className="plus">+</span>
        </MinusAndPlusSelector>
        <RemoveButton  > <Trash size={22}/>REMOVER</RemoveButton>  

       </div> 
        
       </div>


      
        <AlignPrice> 
        <p className='moeda'> R$ </p > <p  className='value'> {props.price}</p > 
        </AlignPrice>




    </ItemCartContainer>

    </>
    )
}
