import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";

interface Transaction {
   id: number; 
   description:string;
   type: 'income' | 'outcome';
   price: number;
   category: string;
   createAt: string;

}


export function Transactions() {

   const [transactions, setTransactions] = useState<Transaction[]>([]);
   async function loadTransactions() {

      await fetch('http://localhost:3335/transactions')
         .then(response => response.json())
         .then(data => setTransactions(data))


   }

   useEffect(() => {
      loadTransactions()
      

   }, []);

   return (<div>


      <Header />
      <Summary />

      <TransactionsContainer>

         <SearchForm />

         <TransactionsTable>
            <tbody>

               {transactions.map(transaction => {
                  return (
                     <tr key={transaction.id}>
                       
                        <td width="50%">{transaction.description}</td>
                        <td><PriceHighLight variant={transaction.type}> {transaction.price}</PriceHighLight> </td>     
                        <td>{transaction.category}</td>
                        <td>{transaction.createAt}</td>
                     </tr>
                  )
               } )}

               <tr>
                  <td width="50%"> Desenvolimento de site</td>
                  <td ><PriceHighLight variant='income'> R$ 12.000,00 </PriceHighLight></td>
                  <td > Venda</td>
                  <td > 13/04/2022</td>
               </tr>

               <tr>
                  <td width="50%"> Hamburguer</td>
                  <td ><PriceHighLight variant='outcome'>  -R$ 12,00 </PriceHighLight> </td>
                  <td > Alimentação</td>
                  <td > 13/04/2022</td>
               </tr>

               <tr>
                  <td width="50%"> Curso</td>
                  <td ><PriceHighLight variant='outcome'>  -R$ 8000,00 </PriceHighLight></td>
                  <td > Aprendizado</td>
                  <td > 13/04/2022</td>
               </tr>

               <tr>
                  <td width="50%"> Nota</td>
                  <td > <PriceHighLight variant='income'> R$ 14.000,00 </PriceHighLight></td>
                  <td > Job</td>
                  <td > 13/04/2022</td>
               </tr>
            </tbody>
         </TransactionsTable>

      </TransactionsContainer>

   </div>)
}