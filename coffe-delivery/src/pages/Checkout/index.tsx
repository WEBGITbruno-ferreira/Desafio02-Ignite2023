import {
    AddressContainer,
    AddressInput,
    AreaLabel,
    CheckoutContainer,
    CityInput,
    ComplementInput,

    TextInputAddress,
    BaseInput,
    PaymentTypeButton,

    TotalCartItensContainer,

    LineSeparator,
    DivTotal,
    ButtonAlingDiv,
    FinishButton
} from "./styles"
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { ItemMenu } from "../../components/itemInCart"

import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect } from "react"

export function Checkout() {

    const { cartListProducts } = useContext(CartContext)
    console.log("Checkout - Context cartListProducts", cartListProducts)

    return (
        <>

            <CheckoutContainer >
                <AreaLabel>
                    <p> Complete seu pedido </p>
                </AreaLabel>
                <AreaLabel>
                    <p> Itens selecionados </p>
                </AreaLabel>
                <AddressContainer>

                    <TextInputAddress>
                        <h1> <MapPinLine size={22} />  Endereço de Entrega </h1>
                        <h3>  Informe o endereço onde deseja receber seu pedido</h3>
                    </TextInputAddress>
                    <BaseInput placeholder="CEP" />

                    <AddressInput placeholder="Rua" />
                    <BaseInput placeholder="Número" />
                    <ComplementInput placeholder="Complemento" />

                    <BaseInput placeholder="Bairro" />
                    <CityInput placeholder="Cidade" />
                    <BaseInput placeholder="UF" />

                    <LineSeparator> </LineSeparator>



                    <p className="span4 payment"> <CurrencyDollar size={22} /> Pagamento </p>
                    <p className="span4 "> O Pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                    <ButtonAlingDiv>
                        <PaymentTypeButton isSelected={true} > <CreditCard size={22} /> Cartão de crédito  </PaymentTypeButton>



                        <PaymentTypeButton isSelected={false}> <Bank size={22} /> Cartão de débito </PaymentTypeButton>



                        <PaymentTypeButton isSelected={false} >  <Money size={22} /> Dinheiro</PaymentTypeButton>
                    </ButtonAlingDiv>







                </AddressContainer>



                <TotalCartItensContainer>


                    {cartListProducts.map((it, index) => {
                       
                        return (<ItemMenu {...it} />)
                    })}

                    {/*<ItemMenu/>
                 <ItemMenu/>
                 
                 <ItemMenu/>

    <ItemMenu/> */}

                    <DivTotal>

                        <p> Total de itens</p>
                        <p> R$ 50</p>

                    </DivTotal>
                    <DivTotal>
                        <p> Entrega</p>
                        <p> R$ 10 </p>

                    </DivTotal>
                    <DivTotal>
                        <p className="Totalize"> Total </p>
                        <p className="Totalize"> R$ 60 </p>

                    </DivTotal>


                    <FinishButton>  CONFIRMAR PEDIDO </FinishButton>




                </TotalCartItensContainer>


            </CheckoutContainer>

        </>)
}