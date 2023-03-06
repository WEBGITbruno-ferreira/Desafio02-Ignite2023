import styled from 'styled-components'

export const ItemMenuContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  display: flex;  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  grid-column: span 2;
  background-color: ${(props) => props.theme['background']};

  min-height: 8rem;
  padding: 0rem 0;
  text-align: center;
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
    line-height: 130%;
   
  }

  .priceAndQuant {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    flex: 1;
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

    .addToCart {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme['white']};
      border-radius: 6px;

      &:hover {
        background-color: ${(props) => props.theme['purple']};
      }

      &.active {
        color: green;
      }

      circle, circle+path { fill : white}
    }
  
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

export const AlignItemAndButton = styled.div``
