import { ItemMenuContainer, MinusAndPlusSelector } from './styles'

import {  ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CardapioItem } from '../cardapio'



export function ItemMenu( props : CardapioItem ) {
    const [quantityOfItem, setquantityOfItem] = useState(1)

    const  {addProduct } = useContext(CartContext)


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

    function addToCart (data : CardapioItem, quantityToAdd : number) {

        addProduct( {
            id: data.id,
            tag: [],
            description: data.description,
            price: data.price,
            quantity: quantityToAdd,
            image: data.image,
            name: data.name
        })
        return 
    }


    return (
    <> {/*console.log(props.image)*/}
    <ItemMenuContainer>


   
        <div className='productImage'> <img src={"src\\assets\\"+props.image+".png"} alt="" /> </div> 
        
        <div className='spanAlign'> 
        { props.tag.map((tag, index)=>{


            return (
            <span key={index}> {tag} </span>
            
           )
        })}
        </div>
        
        {/*<span> Tradicional </span>*/}

        <h1> {props.name} </h1>
        <h6> {props.description}</h6>
        <div className="priceAndQuant"> <p className='moeda'> R$ </p > <p  className='value'> {props.price} </p > 
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
        <label onClick={() => addToCart(props, quantityOfItem)} className='addToCart'> <ShoppingCart size={22}/>  </label>


        </div> 



    </ItemMenuContainer>

    </>
    )
}
