import { CardapioContainer } from './styles'

import { ItemMenu } from '../itemMenu'

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from 'react';


export interface CardapioItem {
    id: string
    tag: Array<string>
    name: string
    description: string
    price: number
    image: string

}

const listOfItensAvaliable: CardapioItem[] = [

    {
        id: uuidv4(),
        tag: ['tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        image: 'Expresso'
    },

    {
        id: uuidv4(),

        tag: ['tradicional'],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.91,
        image: 'Americano'
    },

    {
        id: uuidv4(),

        tag: ['tradicional', 'gelado'],
        name: 'Expresso Cremoso',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.92,
        image: 'ExpressoCremoso'
    },

    {
        id: uuidv4(),
        tag: ['tradicional', 'com leite'],
        name: 'Café com Leite',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.93,
        image: 'CafeComLeite'
    },

    {
        id: uuidv4(),
        tag: ['tradicional', 'com leite'],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.94,
        image: 'Latte'
    },

    {
        id: uuidv4(),
        tag: ['tradicional', 'com leite'],
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.95,
        image: 'Capuccino'
    },

    /////////////////////////////////////

    {
        id: uuidv4(),
        tag: ['tradicional', 'com leite'],
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.96,
        image: 'Mochaccino'
    }



]




export function Cardapio() {
    const [listToRender, setListToRender ] = useState<Array<CardapioItem>>([])

    // Para gravar a lista de itens disponível, assim o UUID não atualiza a cada renderização do cardápio.
    // Imaginando que essa lista de produtos venha de um BD, isto não seria um problema em um cenário  real
    useEffect(() => {

  
        const storedListAsJson = localStorage.getItem('@ignite-coffe-delivery:listOfItensAvaliable-state-1.0.0',   )

        if (storedListAsJson) {
            let listFromStorage  = JSON.parse(storedListAsJson)
            setListToRender(listFromStorage)
        } else {
            const listItensJson = JSON.stringify(listOfItensAvaliable);
            localStorage.setItem('@ignite-coffe-delivery:listOfItensAvaliable-state-1.0.0', listItensJson)
            setListToRender(listOfItensAvaliable)
        }

        

    }, [])


    return (
        <>
            <CardapioContainer>
                <p> Nossos cafés</p>
                <div className='ItensGrid'>

                    {listToRender.map((item) => {
                        return (<ItemMenu key={item.id} {...item} /> )
                    })}





                    {/*<ItemMenu />

<ItemMenu />

<ItemMenu />

<ItemMenu />

<ItemMenu />

<ItemMenu />

<ItemMenu />*/}


                </div>



            </CardapioContainer>
        </>
    )
}
