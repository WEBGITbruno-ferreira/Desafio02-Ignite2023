import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { CartsContextProvider} from './contexts/CartContext'

function App() {
 

  return (
    <>
    
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter> 
       {/* <CartsContextProvider>  */ }
      <Router />
        {/*</CartsContextProvider>  */}
      <GlobalStyle />
      </BrowserRouter> 
    </ThemeProvider>
    </>
  )
}

export default App
