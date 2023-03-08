import styled from 'styled-components'

export const ItemCartContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  display: flex;  
  flex-direction: row;
  align-items: top;
  
  grid-column: span 2;
  background-color: ${(props) => props.theme['background']};
  padding: 0 0 2rem 0;
  text-align: left;
  justify-content: center;



   .productImage {
      margin: 0 3rem 0 0;

  
   }

  img {

    width : 4rem;
    height: 4rem;
  }
  

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;

   
  }

  .priceAndQuant {
    margin: 0.5rem 0;
    display: flex;
    flex-direction: row;
 
    justify-content: center;
    align-items: center;
    max-height: 1.5rem;  


    .moeda{
        font-size: 0.875rem;
        font-weight: 400;
      }
      .value{
        font-size: 1.5rem;
        font-weight: 800;
      }
    input { display: flex;}

}


`



export const MinusAndPlusSelector = styled.div`
      span {
          cursor:pointer; 
     }

      display: flex;
			justify-content: center;
      align-items: center;
      align-content: center;
      background: ${(props) => props.theme['base-button']};
      height:2rem;      
      border-radius: 6px;
      margin: 0 5px;

		.minus, .plus{
			width:2rem;
			height:2rem;
			background:${(props) => props.theme['base-button']};
			border-radius:4px;
			padding:0px 5px 0px 5px;
      font-size: 1.5rem;
      color: ${(props) => props.theme['purple']}		
   
		}
		input{
			height:2rem;
      width: 2rem;
      text-align: center;
      font-size: 1rem;
			border:none;			
      background-color:${(props) => props.theme['base-button']};
     
    }
			`

  
export const RemoveButton = styled.button `
height:2rem;
border: 0;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: left;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 0.75rem;
border-radius: 6px;
text-align: left;
padding: 0 8px;

  
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


&.active {
      color: green;
    }

svg { color : ${(props) => props.theme['purple']};
      margin: 0 0.4rem;
}
`

export const AlignPrice = styled.div`

display: flex;
justify-content: top;
align-content: top;
font-weight: bold;



`
