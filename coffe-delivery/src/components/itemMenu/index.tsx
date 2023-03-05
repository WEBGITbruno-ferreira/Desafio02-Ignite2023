import { ItemMenuContainer, MinusAndPlusSelector } from './styles'

import {  ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
export function ItemMenu() {
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
    <ItemMenuContainer>
        <div className='productImage'> <img src="src\assets\Americano.png" alt="" /> </div> 
        <span> Tradicional </span>

        <h1> Tradicional </h1>
        <h6> O tradicional café feito com água quente e grãos moídos </h6>
        <div className="priceAndQuant"> <p className='moeda'> R$ </p > <p  className='value'> 9,90 </p > 
       {/* <QuantityInput
         type="number"
         placeholder="1"
         step="1"
         min="1"
        
    />  */}

        <MinusAndPlusSelector className="number">
            <span onClick={() => handleSubItem()} className="minus">-</span>
            <input type="text" value={quantityOfItem}/>
            <span onClick={() => handleAddItem()} className="plus">+</span>
        </MinusAndPlusSelector>
        <label onClick={() => addToCart()} className='addToCart'> <ShoppingCart size={22}/>  </label>


        </div> 



    </ItemMenuContainer>

    </>
    )
}
