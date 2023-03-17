import { createContext, ReactNode, useEffect, useState } from 'react'


interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createAt: string;

}



interface TransactionContextType {
  transactions: Transaction[];

}


export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType);


interface TransactionProviderProps {
  children: ReactNode;
}


export function TransactionsProvider({ children }: TransactionProviderProps) {


    const [transactions, setTransactions] = useState<Transaction[]>([]);
    async function loadTransactions() {
 
       await fetch('http://localhost:3335/transactions')
          .then(response => response.json())
          .then(data => setTransactions(data))
 
 
    }
 
    useEffect(() => {
       loadTransactions()
       
 
    }, []);

  return (

    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}