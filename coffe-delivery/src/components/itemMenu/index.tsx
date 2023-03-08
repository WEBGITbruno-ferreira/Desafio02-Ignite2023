import { ItemMenuContainer, MinusAndPlusSelector } from './styles'

import {  ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CardapioItem } from '../cardapio'



export function ItemMenu( props : CardapioItem ) {
    const [quantityOfItem, setquantityOfItem] = useState(1)

    const  {addProduct } = useContext(CartContext)

    console.log(props)

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

        console.log('addToCart')
        addProduct( {
            id: '1',
            tag: 'data.tag',
            description: 'data.description',
            price: 5,
            quantity: 1
        })
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
            <input type="text" onChange={()=> {}} value={quantityOfItem}/>
            <span onClick={() => handleAddItem()} className="plus">+</span>
        </MinusAndPlusSelector>
        <label onClick={() => addToCart()} className='addToCart'> <ShoppingCart size={22}/>  </label>


        </div> 



    </ItemMenuContainer>

    </>
    )
}
