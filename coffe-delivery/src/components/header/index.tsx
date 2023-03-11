import { HeaderContainer } from './styles'
import logoCoffe from '../../assets/Logo.svg'
import location from '../../assets/Location.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
export function Header() {


  const {cartListProducts}  = useContext(CartContext)



  return (
    <HeaderContainer>
        <NavLink to="/"> <img src={logoCoffe} alt=""  /> </NavLink>
      <nav>
    
        <NavLink to="/" title="Timer">
          <MapPin size={24}   /> <label htmlFor="textLocation">Cotia, SP</label>
        </NavLink>
        <NavLink to="/checkout" title="CheckouCart">
          <ShoppingCart size={24}/> <label className='numberInCart' htmlFor="numberInCart">{cartListProducts.length}</label> 
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
