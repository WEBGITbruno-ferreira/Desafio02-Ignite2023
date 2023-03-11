

import { useNavigate } from 'react-router-dom';
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, UserFocus } from 'phosphor-react'
import { ItemInCart } from "../../components/itemInCart"

import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect, useState } from "react"

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver,  } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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



const addressAndPaymentValidation = zod.object({
    CEP: zod.string().min(8, 'Informe o cep'),
    Rua: zod.string().min(1, 'Informe a rua'),
    Numero: zod.string().min(1, 'Informe o Número'),
    Complemento: zod.string().optional(), 
    Bairro: zod.string().min(1, 'Informe o bairro'),
    Cidade: zod.string().min(1, 'Informe a cidade'),
    UF: zod.string().min(1, 'Informe a UF').max(2, 'Informe a UF'),
    typeOfPayment: zod.string().min(5, 'Selecione o tipo de pagamento')

    /*
    minutesAmount: zod
        .number()
        .min(1)
        .max(60, 'O ciclo deve ser no máximo 60 minutos'),*/
})

export  type AddressAndPaymentFormData = zod.infer<typeof addressAndPaymentValidation> // criando com base em outra variavel



// A p

export function Checkout() {

    
    const navigate = useNavigate();


    const addressForm = useForm<AddressAndPaymentFormData>({
        resolver: zodResolver(addressAndPaymentValidation),
        defaultValues: {
            CEP: '',
            Rua: '', 
            Numero: '',
            Complemento: '', 
            Bairro: '', 
            Cidade: '', 
            UF: '', 
            typeOfPayment: ''
            
        },
    })

    function handleCreateNewCycle(data: AddressAndPaymentFormData) {
        //   console.log(data)
      // createNewCycle(data)
        reset()
      }

    const [typeOfPayment, setTypeOfPayment] = useState('')

    const { handleSubmit, watch, reset, register, setValue } = addressForm

    const { cartListProducts } = useContext(CartContext)
    console.log("Checkout - Context cartListProducts", cartListProducts)

    const totalValueItens = cartListProducts.reduce((soma, currentItem) => soma + (currentItem.price * currentItem.quantity), 0)
    const valueShipping = 5;

    function validateOrder() {
        const CEP = watch('CEP')
        const Rua = watch('Rua')
        const Numero= watch('Numero')
        const Complemento = watch('Complemento')
        const Bairro= watch('Bairro')
        const Cidade = watch('Cidade')
        const UF= watch('UF')

        let jsonAddresObj = {
            CEP, 
            Rua, 
            Numero, 
            Complemento, 
            Bairro, 
            Cidade, 
            UF , 
            typeOfPayment           
        }
    
        const validateComplete  = addressAndPaymentValidation.safeParse(jsonAddresObj)


       if (!validateComplete.success) {
           let xerror = validateComplete.error
           const zoderr = JSON.parse(xerror)
           console.log(zoderr)
           toast(zoderr[0].message+" corretamente")

       } else {
        console.log("ELSE",  validateComplete)

        
            const listItensJson = JSON.stringify(jsonAddresObj);
            localStorage.setItem('@ignite-coffe-delivery:addresdOrder-1.0.0', listItensJson)
           
            navigate('/ordercomplete');;
       }
    }



    useEffect(()=> {
        let storedAddressString = localStorage.getItem('@ignite-coffe-delivery:addresdOrder-1.0.0',   )

          if(storedAddressString) {
          let defaultAddresObj  = JSON.parse(storedAddressString)

           setValue('CEP', defaultAddresObj.CEP)
           setValue('Rua', defaultAddresObj.Rua)
           setValue('Numero', defaultAddresObj.Numero)
           setValue('Complemento', defaultAddresObj.Complemento)
           setValue('Bairro', defaultAddresObj.Bairro)
           setValue('Cidade', defaultAddresObj.Cidade)
           setValue('UF', defaultAddresObj.UF)
           setValue('typeOfPayment', defaultAddresObj.typeOfPayment)           
           setTypeOfPayment(defaultAddresObj.typeOfPayment)
          
        }

        
            

    }, [])



    return (
        <>

            <CheckoutContainer >
                <AreaLabel>
                    <p> Complete seu pedido </p>
                </AreaLabel>
                <AreaLabel>
                    <p> Itens selecionados </p>
                </AreaLabel>
            
                <FormProvider {...addressForm}>
                    <AddressContainer>

                        <TextInputAddress

                        >
                            <h1> <MapPinLine size={22} />  Endereço de Entrega </h1>
                            <h3>  Informe o endereço onde deseja receber seu pedido</h3>
                        </TextInputAddress>
                        <BaseInput 
                            placeholder="CEP"
                            id="CEP"
                            {...register('CEP')}
                        />

                        <AddressInput placeholder="Rua"
                            {...register('Rua')} />

                        <BaseInput placeholder="Número"
                            {...register('Numero')}
                        />

                        <ComplementInput placeholder="Complemento" 
                            {...register('Complemento')}
                        />

                        <BaseInput placeholder="Bairro" 
                            {...register('Bairro')}
                        />
                        <CityInput placeholder="Cidade" 
                             {...register('Cidade')}
                        />
                        <BaseInput placeholder="UF"
                             {...register('UF')}
                        />

                        <LineSeparator> </LineSeparator>

                        <p className="span4 payment"> <CurrencyDollar size={22} /> Pagamento </p>
                        <p className="span4 "> O Pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                        <ButtonAlingDiv>
                            <PaymentTypeButton onClick={()=>setTypeOfPayment("creditCardSelected")} isSelected={"creditCardSelected" === typeOfPayment} > <CreditCard size={22} /> Cartão de crédito  </PaymentTypeButton>
                            <PaymentTypeButton onClick={()=>setTypeOfPayment("debitCardSelected")} isSelected={"debitCardSelected" === typeOfPayment}> <Bank size={22} /> Cartão de débito </PaymentTypeButton>
                            <PaymentTypeButton onClick={()=>setTypeOfPayment("moneySelected")} isSelected={"moneySelected" === typeOfPayment} >  <Money size={22} /> Dinheiro</PaymentTypeButton>
                        </ButtonAlingDiv>


                    </AddressContainer>
             


                <TotalCartItensContainer>


                    {cartListProducts.map((it, index) => {

                        return (<ItemInCart key={index} {...it} />)
                    })}


                    <DivTotal>

                        <p> Total de itens</p>
                        <p>  {totalValueItens.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                    </DivTotal>
                    <DivTotal>
                        <p> Entrega</p>
                        <p> {valueShipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>

                    </DivTotal>
                    <DivTotal>
                        <p className="Totalize"> Total </p>
                        <p className="Totalize"> {(totalValueItens + valueShipping).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>

                    </DivTotal>


                    <FinishButton onClick={()=>validateOrder()}>  CONFIRMAR PEDIDO </FinishButton>




                </TotalCartItensContainer>

                </FormProvider>
          
          
                <ToastContainer />

            </CheckoutContainer>

        </>)
}