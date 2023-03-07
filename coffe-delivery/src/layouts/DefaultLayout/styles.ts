import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100%;
  
  margin: 1rem 0;

  background: ${(props) => props.theme['background']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
