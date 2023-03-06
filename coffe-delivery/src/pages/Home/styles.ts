
import styled from 'styled-components'

export const HomeContainer = styled.main`
  border: 3px solid green;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;  
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
 
  border: 1px solid green;
  width: 100vw;
  height: 25.75rem;
  padding :0  15rem 0 15rem;
  
  background-color: ${(props) => props.theme['background']};
  width: 98vw;
  max-width: 98vw;
  margin: 6.2rem  auto 0 auto;

  .leftContent {
    display: flex;
   // background-color : red;
    width : 49vw;
    flex-direction: column;
   

    
    h1 {
      font-family: 'Baloo 2', cursive;
      font-size : 3.0rem;
      font-weight: bold;
      line-height: 100%;
      margin-bottom: 1rem;
 
    }

    h6 {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 100%;
          margin-bottom: 1rem;
    }

    .IconsAndMessages{
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 50% 50%;

      div {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 2rem;
     
        span{ margin-left : 1rem;}
        .ShoppingCart {
          background-color: ${(props) => props.theme['yellow-dark']};
          color:  ${(props) => props.theme['white']};
          border-radius: 100px;
          padding: 4px;

           circle{
            fill: #ffffff
          }

          circle + path{
            fill: #ffffff
          } 
          
        }

        .Package {

          background-color: ${(props) => props.theme['base-text']};
          color:  ${(props) => props.theme['white']};
          border-radius: 100px;
          padding: 4px;
          
        }

        .Timer {

        background-color: ${(props) => props.theme['yellow']};
        color:  ${(props) => props.theme['white']};
        border-radius: 100px;
        padding: 4px;

        }

        .Coffee {

        background-color: ${(props) => props.theme['purple']};
        color:  ${(props) => props.theme['white']};
        border-radius: 100px;
        padding: 4px;

        }

        
      }

      

    }



  
  }

  .rightContent {
    //background-color : blue;
    max-width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    
  
  }
  
  
  `