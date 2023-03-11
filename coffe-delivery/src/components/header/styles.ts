import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //border: 1px solid red;
  padding: 2rem 15rem;
  position: fixed;
  top:  0;
  width: 98vw;
  overflow: hidden;
  background-color: ${(props) => props.theme['background']};
  z-index: 10;

 

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 8rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      color: ${(props) => props.theme['purple']}; 
      background-color: ${(props) => props.theme['purple-light']}; 
      text-decoration: none;
 



    }

    
    .numberInCart { color: black;
      position: relative;
      display: flex;
      width: 25px;
      height: 18px;
      top: -23px;
      right: -7px;
      font-size: 0.8rem;
      background-color: ${(props) => props.theme['yellow-dark']};
      border-radius: 200px;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: ${(props) => props.theme['white']};

  }

    a+a{
      width: 3rem;
      color: ${(props) => props.theme['yellow-dark']}; 
      background-color: ${(props) => props.theme['yellow-light']}; 
      justify-content: center;
      align-items: center;
      padding-left: 0.9rem;

      
      circle { fill : ${(props) => props.theme['yellow-dark']}}

      circle+path { fill : ${(props) => props.theme['yellow-dark']}}

 

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['yellow-dark']};
      };


      &.active {
        //color: green;
      }
    }
  }

`
