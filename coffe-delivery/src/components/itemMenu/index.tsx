import { ItemMenuContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function ItemMenu() {
    return (
    <>
    <ItemMenuContainer>
        <img src="../assets/Americano.png" alt="" />

    </ItemMenuContainer>
    <ItemMenuContainer>
        <h1> Café</h1>

    </ItemMenuContainer>
    </>
    )
}
