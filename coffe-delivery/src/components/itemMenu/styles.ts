import styled from 'styled-components'

export const ItemMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  padding: 2rem 15rem;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme['background']};
`