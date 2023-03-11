
import styled from 'styled-components'

export const OrderContainer = styled.main`
  display: flex;
  flex-direction: column;
  //border: 3px solid green;
  overflow: hidden;
  flex-wrap: nowrap;  
  gap: 1rem;
  align-items: flex-start;
  justify-content: center; 
  width: 100vw;
  padding :0  15rem 0 15rem;  
  background-color: ${(props) => props.theme['background']};
  margin: 6.2rem  auto 0 auto;

  .leftContent {
    display : flex;
    flex-direction: column;

    min-width: 30vw;

    .MapPin{
      display: flex;
      flex-direction: column;
      margin: 1rem 0rem;
      
     
      svg {
        color: ${(props) => props.theme['white']};
        circle{ 
          fill: ${(props) => props.theme['white']};           
          stroke: none ;}
        background-color: ${(props) => props.theme['purple-dark']};
        border-radius: 100px;
        padding: 2px 2px
        
      
      }

      label {
        color: ${(props) => props.theme['base-text']};
      

         span{ font-weight: bold; padding: 0 0.8rem;}
    }
   

      label+p {padding-left:1.5rem}

    }

    .Timer{
      display: flex;
      flex-direction: column;
      margin: 0rem 0rem 1rem 0rem;
     
      svg {
        color: ${(props) => props.theme['white']};
     
        background-color: ${(props) => props.theme['yellow']};
        border-radius: 100px;
        padding: 2px 2px
      
      }

      label+p {padding-left:1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-text']}
      
      }

    }


    .CurrencyDollar{
      display: flex;
      flex-direction: column;
      margin: 0rem 0rem 1rem 0rem;
     
      svg {
        color: white;
     
        background-color: ${(props) => props.theme['yellow-dark']};
        border-radius: 100px;
        padding: 2px 2px
      
      }

      label+p {padding-left:1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-text']}
      
      }

    }

    label {
      display: flex;  
    }

  }




  .rightContent {

    min-width: 30vw;
    img {
      width: 100%;
      height: auto;}
  
    
  
  }
  
  
  `

export const TextOrderContainer = styled.div`
display: flex;
flex-direction: column;
h1 { color: ${(props) => props.theme['yellow-dark']} }

`

export const MainContentPage = styled.div`
display: flex;
flex-direction: row;
h1 { color: ${(props) => props.theme['yellow-dark']} }

`
