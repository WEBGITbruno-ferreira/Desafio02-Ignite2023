import { MainContentPage, OrderContainer, TextOrderContainer } from "./styles"

import {Timer, MapPin, CurrencyDollar} from 'phosphor-react'

import orderInfo from '../../assets/OrderInfo.png'
import illustration from '../../assets/illustration.png'
import { useEffect, useState } from "react"
import { AddressAndPaymentFormData } from "../Checkout"



export function OrderComplete() {

   enum PaymentTypes {
    creditCardSelected = 'Cartão de Crédito',
    debitCardSelected = 'Cartão de Débito',
    moneySelected = 'Dinheiro',
  }
  
   let defaultAddresObj : AddressAndPaymentFormData  =  {
    CEP: '',
    Rua: '',
    Numero: '',
    Bairro: '',
    Cidade: ' ',
    UF: '',
    typeOfPayment: '',
    Complemento : '' 
}
   

 
    let storedAddressString = localStorage.getItem('@ignite-coffe-delivery:addresdOrder-1.0.0',   )

    if(storedAddressString) {

      defaultAddresObj  = JSON.parse(storedAddressString)

   
    }

    
    let typePayment = defaultAddresObj.typeOfPayment
    let TypeText = typePayment === 'creditCardSelected' ? PaymentTypes.creditCardSelected :  typePayment === 'debitCardSelected' ? PaymentTypes.debitCardSelected : PaymentTypes.moneySelected ;


    return (
        <>
            <OrderContainer >
                <TextOrderContainer>
                  <h1> Uhu! Pedido confirmado</h1>
                  <p> Agora é só aguardar que logo o café chegará até você</p>
                </TextOrderContainer>

                <MainContentPage> 
                <div className="leftContent"> 
                  <div className="MapPin"> <label htmlFor="textLocation">  <MapPin size={24}   /> Entrega em <span> { defaultAddresObj.Rua +', '+ defaultAddresObj.Numero } </span></label> 
                  <p>{ defaultAddresObj.Bairro +' - '+ defaultAddresObj.Cidade  +', '+ defaultAddresObj.UF} </p> </div>
                  <div className="Timer"> <label htmlFor="textLocation">   <Timer size={24}   /> Previsão de Entrega </label>  <p>20min - 30min </p> </div>
                  <div className="CurrencyDollar">  <label htmlFor="textLocation"> <CurrencyDollar size={24}   />Pagamento na entrega</label> <p>
               
                  {TypeText}
                  </p></div>
                </div>

                
                <div className="rightContent"> 
                  <img src={illustration} alt="" />
                 </div> 

                </MainContentPage> 
            </OrderContainer>
       
        </>)
}