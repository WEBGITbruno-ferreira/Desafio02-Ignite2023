import styled from 'styled-components'

export const CardapioContainer = styled.div`
  //display: flex;
  align-items: center;

  border: 1px solid red;
  padding: 0 15rem;
  width: 99vw;
  max-width: 99vw;

  background-color: ${(props) => props.theme['background']};

  p{ margin: 2rem 0;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }

  .ItensGrid {
    display : grid;
    gap: 2rem;

    grid-template-columns: repeat(4, 1fr);
  }


`