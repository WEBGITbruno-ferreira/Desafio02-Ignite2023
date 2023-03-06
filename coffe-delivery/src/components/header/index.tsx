import { HeaderContainer } from './styles'
import logoCoffe from '../../assets/Logo.svg'
import location from '../../assets/Location.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <MapPin size={24}   /> <label htmlFor="textLocation">Cotia, SP</label>
        </NavLink>
        <NavLink to="/checkout" title="Histórico">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
