import styled from 'styled-components'

export const ItemMenuContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme['base-hover']};
  max-width: 16rem;
  max-height: 19.375rem;
  min-width: 16rem;
  min-height: 19.375rem;
  border-radius: 6px 36px;
  padding: 0 1.5rem;
  text-align: center;

   .productImage {
    display: flex;
    justify-content: center;
    margin-top: -20px;
   }

  img {
   // position: relative;
    z-index: 5;
    width : 7.5rem;
    height: 7.5rem;
  }
  span {
    background-color: ${(props) => props.theme['yellow-light']};
    color : ${(props) => props.theme['yellow-dark']};
    padding : 0.3rem 0.5rem;
    border-radius: 100px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    margin: 1rem auto;
    
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  h6 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }

  .priceAndQuant {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    align-items: center;
    max-height: 2rem;  

    p{ display: flex;}

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
      height:2.9rem;      
      border-radius: 6px;
      margin: 0 5px;

		.minus, .plus{
			width:2rem;
			height:2.3rem;
			background:${(props) => props.theme['base-button']};
			border-radius:4px;
			padding:0px 5px 0px 5px;
      font-size: 2rem;
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