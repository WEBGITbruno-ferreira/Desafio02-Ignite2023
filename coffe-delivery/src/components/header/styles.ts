import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  padding: 2rem 15rem;
  position: fixed;
  top:  0;
  width: 100%;
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

    a+a{
      width: 3rem;
      color: ${(props) => props.theme['yellow-dark']}; 
      background-color: ${(props) => props.theme['yellow-light']}; 

      
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
