import { createContext, ReactNode, useEffect, useState } from 'react'


interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;

}



interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions : ( query ?: string)=> Promise<void>

}


export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType);


interface TransactionProviderProps {
  children: ReactNode;

}


export function TransactionsProvider({ children }: TransactionProviderProps) {


    const [transactions, setTransactions] = useState<Transaction[]>([]);
   
   
    async function fetchTransactions(query ?: string) {
      
    const url = new URL('http://localhost:3335/transactions');

    if (query) {
      url.searchParams.append('q', query);
    }


    const response =    await fetch(url)

    
    console.log('TransactionsProvider', response)

    const data = await response.json();

    console.log('TransactionsProvider', data)

    setTransactions(data);
  
 
 
    }
 
    useEffect(() => {
       fetchTransactions()
       
 
    }, []);

  return (

    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}