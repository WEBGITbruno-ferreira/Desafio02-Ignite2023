import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  //font-size: 100%; // feito de última hora, os fontes vão ficar fora do padrão do projeto
 
  background-color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 


}

:focus {
  outline: 0;

}

body{
  background: ${(props) => props.theme['base-card']};

  -webkit-font-smoothing:  antialiased;
}

body , input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
html {
  font-size: 16px;
}

`
