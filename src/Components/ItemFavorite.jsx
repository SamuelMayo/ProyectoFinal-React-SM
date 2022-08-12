import React from 'react'
import { useContext } from 'react'
import { contextCart } from './CartContext'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import ItemCount from './ItemCount';
import { contextFav } from './FavContext';

const ItemFavorite = ({ product }) => {

    const { addProducts } = useContext(contextCart)
    const { addFavorite } = useContext(contextFav)

    const remove = () => {
        addFavorite(product)
    }


    const onAdd = (cantidad) => {
        addProducts({ ...product, quantity: cantidad })
        remove()
    }

    return (
        <div className='w-full flex justify-around items-center py-5 border-b-2'>
            <img className='w-1/6' src={product.category.image} alt={product.title} />
            <div className='w-1/4 flex flex-col justify-around'>
                <h3 className='text-2xl font-bold mb-4'>{product.title}</h3>
                <p className='text-md'>{product.description}</p>
            </div>
            <div className='w-1/6 flex flex-col items-center'>
                <h3 className='font-bold'>{`Precio: $${product.price}`}</h3>
                <ItemCount onAdd={onAdd} stock={7} />
            </div>
            <div className='w-15'>
                <button onClick={remove}><FavoriteIcon sx={{ color: pink[500] }} /></button>
            </div>

        </div>
    )
}

export default ItemFavorite

