import { HomeContainer } from "./styles"
import CoffeHomeImg from '../../assets/CoffeHome.png'
import {ShoppingCart, Package, Timer, Coffee} from 'phosphor-react'
import { Cardapio } from "../../components/cardapio"

export function Home() {

    return (
        <>
            <HomeContainer >
                <div className="leftContent"> 
                    <h1> Encontre o café perfeito para qualquer hora do dia  </h1>
                    <h6> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora  </h6>
                    <div className="IconsAndMessages"> 
                        <div> <ShoppingCart className="ShoppingCart" size={32}/> <span> Compra simples e segura</span> </div>
                        <div> <Package className="Package" size={32}/>  <span> Embalagem mantém o café intacto</span> </div>
                        
                        <div> <Timer className="Timer" size={32}/> <span> Entrega rápida e rastreada </span> </div> 
                        <div> <Coffee className="Coffee" size={32}/> <span> O café chega fresquinho até você</span> </div> 
                    </div>
                    </div>
                <div className="rightContent"> <img src={CoffeHomeImg} alt=""/> </div>
            </HomeContainer>
            {/* colocar dentro de um cardápioContainer */}
            <Cardapio/>
        </>)
}