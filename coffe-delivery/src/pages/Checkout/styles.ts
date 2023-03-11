import { MouseEventHandler } from "react";
import styled from "styled-components";


export const CheckoutContainer = styled.div`

  display: grid; 
  column-gap: 2rem;
  grid-template-columns: 1.5fr 1fr;
  align-items: top;

  width: 98vw;
  margin :6.2rem  auto 0 auto; //troquei o padding por margin, vamos ver o efeito no alinhamento
  padding: 0 10rem;
  background-color : ${(props) => props.theme['white']};

@media (max-width: 1350px) {
  padding: 0 8rem;
    }

    @media (max-width: 1105px) {
      margin :6.2rem  auto 0 auto;
      padding: 1rem;
 
    }

    @media (max-width: 815px) {
      margin :6.2rem  auto 0 auto;
      padding: 1rem;
      grid-template-columns: 1fr ;
    }


`
export const AreaLabel = styled.div`

display: flex;
align-items: center;
justify-content: left;
background-color : ${(props) => props.theme['white']};
font-family: 'Baloo 2';
font-style: normal;
font-weight: 700;
font-size: 18px;
padding: 1rem 0;
`



export const AddressContainer = styled.div`
background-color : ${(props) => props.theme['background']};
display: grid;
grid-template-columns: repeat(3, 1fr) 4rem;
grid-auto-rows: min-content;
gap: 0.8rem;
max-height: 60vh;

padding: 5rem 3rem;


.span4{
  grid-column: span 4;
}

.span1{
  grid-column: span 1;
}


 
p{  display: flex;
    svg{ color: ${(props) => props.theme['purple']} }
    grid-column: span 3;
    justify-content: left;
    font-size: 1rem;
    }

    p+p { font-size: 0.875rem; line-height: 2rem; padding-left: 1.2rem;}

` 
export const LineSeparator = styled.div`
border-bottom: 2px solid ${(props) => props.theme['base-button']};
grid-column: span 4;
min-height: 2rem;
`
export const TextInputAddress = styled.div`
display: flex;
flex-direction: column;
grid-column: span 4;
svg{ color : ${(props) => props.theme['yellow-dark']}
}

h1  { font-size: 1rem ; 
      font-weight: 400;      
      line-height: 250%;
}

h3{ font-size: 0.875rem; 
    font-weight: 400;
    line-height: 250%;
}


`

export const BaseInput = styled.input`
  background:  ${(props) => props.theme['base-input']};
  height: 2.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['base-text']};
  padding: 0.75rem;
  

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-weight: normal;
  }
`


export const AddressInput = styled(BaseInput)`
 
  grid-column: span 4;
`

export const ComplementInput = styled(BaseInput)`
   grid-column: span 3;
`
export const CityInput = styled(BaseInput)`
  grid-column: span 2;
`
interface PaymentButtonProps {
  isSelected ?: boolean;
  onClick : MouseEventHandler<HTMLButtonElement>
}
export const PaymentTypeButton = styled.button<PaymentButtonProps> `
  width: 100%;
  margin: 0 5px;

  max-height: 50px;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  border-radius: 6px;
  
    
  cursor: pointer;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};

    &:not(:disabled):hover {
    background: ${(props) => props.theme['base-hover']};
    }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  border: ${ (props) => props.isSelected ? 1: 0};
  border-color: ${ (props) => props.isSelected ? props.theme['purple'] : ''};


  &.active {
        color: green;
      }

  svg { color : ${(props) => props.theme['purple']};
        margin: 0 0.8rem;
  }
`




export const TotalCartItensContainer = styled.div`
background-color : ${(props) => props.theme['background']};
display: grid;
//grid-template-columns: repeat(2, min-content);
grid-auto-rows: min-content;
padding: 2rem 3rem;
border-top-right-radius: 50px;
border-bottom-left-radius: 50px;

` 

export const DivTotal = styled.div`
grid-column: span 2;
display: flex;
justify-content: space-between;
padding: 1rem 0;
font-family: 'Roboto' ;
font-size: 14px;

.Totalize { font-weight :  bold}

`

export const ButtonAlingDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
grid-column: span 4;

`



export const FinishButton = styled.button<PaymentButtonProps> `
  width: 100%;
  border: 0;
  max-height: 50px;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
 grid-column: span 2;
  
    
  color: ${(props) => props.theme['white']};
  background: ${(props) => props.theme['yellow-dark']};

    &:not(:disabled):hover {
    background: ${(props) => props.theme['base-hover']};
    }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  cursor: pointer;
`
