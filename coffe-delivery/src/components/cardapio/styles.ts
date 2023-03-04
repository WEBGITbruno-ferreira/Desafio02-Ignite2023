import styled from 'styled-components'

export const CardapioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;

  width: 80vw;

  background-color: ${(props) => props.theme['background']};
`