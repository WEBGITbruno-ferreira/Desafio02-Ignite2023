import { CardapioContainer } from './styles'

import { ItemMenu } from '../itemMenu'
import { ReactNode } from 'react'


  

export function Cardapio() {
    return (
        <>
            <CardapioContainer>
                <p> Nossos cafés</p>
                <div className='ItensGrid'>
                <ItemMenu/>
                
                <ItemMenu/>

                <ItemMenu/>

                <ItemMenu/>

                </div>
              


            </CardapioContainer>
        </>
    )
}
