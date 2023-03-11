import { HeaderContainter, HeaderContent, NewTransactionButton } from "./styles";
import logoimg from '../../assets/logo.svg'

export function Header () {
  return (

<HeaderContainter>
  <HeaderContent>

    <img src={logoimg} alt="" />

    <NewTransactionButton> Nova transação </NewTransactionButton>

  </HeaderContent>
   
</HeaderContainter>

 )
}