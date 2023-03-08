import {  AlignPrice,  ItemCartContainer, MinusAndPlusSelector, RemoveButton } from './styles'

import {  CreditCard, ShoppingCart, Trash } from 'phosphor-react'
import { useState } from 'react'
import { CardapioItem } from '../cardapio';

export function ItemMenu( props : CardapioItem) {
    const [quantityOfItem, setquantityOfItem] = useState(1)
    function handleAddItem() {
        let actualQuantity = quantityOfItem;
        setquantityOfItem (quantityOfItem+1)
        return 'x'
    }

    function handleSubItem() {
        let actualQuantity = quantityOfItem;
        if (actualQuantity > 0) 
        setquantityOfItem (quantityOfItem-1)
       
    }

    function addToCart() {
        alert('item add to cart')
        return 
    }


    return (
    <>
    <ItemCartContainer>

        <div className='productImage'> <img src="src\assets\Americano.png" alt="" /> </div> 
        
        <div>
        <h1> Tradicional </h1>
        <div className="priceAndQuant"> 
        
        <MinusAndPlusSelector className="number">
            <span onClick={() => handleSubItem()} className="minus">-</span>
            <input type="text" onChange={()=> {}} value={quantityOfItem}/>
            <span onClick={() => handleAddItem()} className="plus">+</span>
        </MinusAndPlusSelector>
        <RemoveButton  > <Trash size={22}/>REMOVER</RemoveButton>  

       </div> 
        
       </div>


      
        <AlignPrice> 
        <p className='moeda'> R$ </p > <p  className='value'> 9,90 </p > 
        </AlignPrice>




    </ItemCartContainer>

    </>
    )
}
