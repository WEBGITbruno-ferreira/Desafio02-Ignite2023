import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export function NewTransactionModal() {

  return (
    <Dialog.Portal>
      
      <Overlay/>
      <Content> 

        <Dialog.Title> Nova Transação </Dialog.Title> 
        <CloseButton> <X size={24} />  </CloseButton> 
        <form action="">

          <input type="text" placeholder='descrição' required />
          <input type="number" placeholder='Preço' required />
          <input type="text" placeholder='Categoria' required />

          <TransactionType>  

          
              <TransactionButton variant='income' > <ArrowCircleUp size={24}/> Entrada</TransactionButton>
              <TransactionButton variant='outcome'> <ArrowCircleDown size={24}/> Saída</TransactionButton>


          
          </TransactionType>

          <button type='submit'> Cadastrar</button>
        </form>
        
      </Content>
  
  </Dialog.Portal>
  
    )
}