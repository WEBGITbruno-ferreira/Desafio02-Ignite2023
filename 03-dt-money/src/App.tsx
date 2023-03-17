import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./context/TransactionContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (

  <ThemeProvider theme={defaultTheme}> 

  <TransactionsProvider>
    <Transactions/>
  </TransactionsProvider>

  <GlobalStyle/>
  </ThemeProvider> 
  )
}


