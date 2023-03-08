import { CardapioContainer } from './styles'

import { ItemMenu } from '../itemMenu'

import { v4 as uuidv4 } from "uuid";


export interface CardapioItem{
    id : string
    tag: Array<string>
    name: string
    description: string
    price: number
    image: string

}

const listOfItensAvaliable : CardapioItem[] = [

    {
        id: uuidv4(),
        tag: ['tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        image: ''
    }, 

    {
        id: uuidv4(),

        tag: ['tradicional' ],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.91, 
        image: ''
    },

    {
        id: uuidv4(),

        tag: ['tradicional', 'gelado'],
        name: 'Expresso Cremoso',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.92,
        image: ''
    },

    {
        id: uuidv4(),
        tag: ['tradicional', 'com leite'],
        name: 'Café com Leite',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.93,
        image: ''
    }, 

    {
        id: uuidv4(),
        tag: ['tradicional', 'com leite'],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.94,
        image: ''
    }, 

    {
        id: uuidv4(),
        tag: ['tradicional', 'com leite'],
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.95,
        image: ''
    }, 

    /////////////////////////////////////

    {
        id: uuidv4(),
        tag: ['tradicional', 'com leite'],
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.96,
        image: ''
    }

    

]



export function Cardapio() {
    return (
        <>
            <CardapioContainer>
                <p> Nossos cafés</p>
                <div className='ItensGrid'>

                    {listOfItensAvaliable.map( (item) => {
                        return (<ItemMenu {...item} />)
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
