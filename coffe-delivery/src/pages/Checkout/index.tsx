import { 
    AddresContainer, 
    AddressInput, 
    AreaLabel, 
    CheckoutContainer, 
    CityInput, 
    ComplementInput,      
    PaymentContainer, 
    TextInputAddress, 
     BaseInput,
     PaymentTypeButton,
     
     TotalCartItensContainer
     } from "./styles"
import { MapPinLine , CurrencyDollar, CreditCard, Bank, Money} from 'phosphor-react'
import { ItemMenu } from "../../components/itemInCart"

export function Checkout() {

    return (
        <>

            <CheckoutContainer >
                <AreaLabel>
                    <p> Complete seu pedido </p>
                </AreaLabel>
                <AreaLabel>
                    <p> Itens selecionados </p>
                </AreaLabel>
                <AddresContainer>
            
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

                </AddresContainer>

                <TotalCartItensContainer> 
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                </TotalCartItensContainer>

                <PaymentContainer> 
                    <p> <CurrencyDollar size={22}/> Pagamento </p> 
                    <p> O Pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    <PaymentTypeButton isSelected={true} > <CreditCard size={22}/> Cartão de crédito  </PaymentTypeButton>  
                    
                    <PaymentTypeButton isSelected={false}> <Bank size={22} /> Cartão de débito </PaymentTypeButton>   
                    
                    <PaymentTypeButton isSelected={false} >  <Money size={22} /> Dinheiro</PaymentTypeButton> 
                </PaymentContainer>

            </CheckoutContainer>

        </>)
}