import styled from 'styled-components'

export const CardapioContainer = styled.div`
  //display: flex;
  align-items: center;

  border: 1px solid red;
  padding: 0 15rem;
  width: 98vw;
  max-width: 98vw;
  margin: 0 auto;
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

  @media (max-width: 1350px) {
    .ItensGrid { grid-template-columns: repeat(3, 1fr); }
    }

    @media (max-width: 1105px) {
    .ItensGrid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 815px) {
    .ItensGrid { grid-template-columns: repeat(1, 1fr);}
    }




`