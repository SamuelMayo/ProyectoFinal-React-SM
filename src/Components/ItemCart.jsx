import React from 'react'
import { useContext } from 'react'
import { contextCart } from './CartContext'
import DeleteIcon from '@mui/icons-material/Delete';

const ItemCart = ({ product }) => {

    const { removeItem } = useContext(contextCart)

    const remove = () => {
        removeItem(product)

    }

    return (
        <div className='flex justify-around items-center py-5 border-b-2 w-full'>
            <img className='w-1/6' src={product.category.image} alt={product.title} />
            <div className='w-1/4 flex flex-col justify-around'>
                <h3 className='text-2xl font-bold mb-4'>{product.title}</h3>
                <p className='text-md'>{product.description}</p>
            </div>
            <div className='w-1/6'>
                <p className='pb-2'>{`Precio unitario: $${product.price}`}</p>
                <p className='pb-2'>{`Cantidad: ${product.quantity}`}</p>
                <h3 className='pb-2'>{`Total de producto: $${product.price * product.quantity}`}</h3>
            </div>
            <div className='w-15'>
                <button onClick={remove}><DeleteIcon /></button>
            </div>

        </div>
    )
}

export default ItemCart