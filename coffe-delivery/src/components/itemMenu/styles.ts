import styled from 'styled-components'

export const ItemMenuContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: top;
  justify-content: center;
 

  border: 1px solid red;

  background-color: ${(props) => props.theme['base-hover']};
  max-width: 16rem;
  max-height: 19.375rem;
  min-width: 16rem;
  min-height: 19.375rem;
  border-radius: 6px 36px;

   div {
    display: flex;
    justify-content: center;
    margin-top: -20px;
   }

  img {
    position: relative;
    z-index: 5;
    width : 7.5rem;
    height: 7.5rem;
  }
`