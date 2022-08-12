import React, { useState, useContext, useEffect } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { contextCart } from './CartContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import { contextFav } from './FavContext';


const ItemDescription = ({ product }) => {

  const [counter, setCounter] = useState(true)
  const [favorite, setfavorite] = useState(false)

  const { addProducts, } = useContext(contextCart)
  const { addFavorite, favoriteList } = useContext(contextFav)

  const onAdd = (cantidad) => {
    setCounter(false)
    addProducts({ ...product, quantity: cantidad })
  }

  useEffect(() => {
    const checkFav = () => {
      let aux = [...favoriteList]
      let found = aux.find(prod => prod.id === product.id)
      found ? setfavorite(true) : setfavorite(false)
    }
    checkFav();
  }, [product, favoriteList])


  const fav = () => {
    setfavorite(current => !current)
    addFavorite(product)
  }

  return (

    product.category && (
      <>
        <div className='flex justify-center mt-5 w-11/12'>
          <img className='w-2/5 h-96 mx-3' src={product.images[0]} alt={product.title} />
          <div className='mx-5 w-1/4'>
            <h2 className='text-3xl font-bold mb-4'>{product.title}</h2>
            <h3 className='text-xl font-bold mb-5'>{product.price}$</h3>
            <ul className='flex justify-around mb-4'>
              <li><span>XS</span></li>
              <li><span>S</span></li>
              <li><span>M</span></li>
              <li><span>L</span></li>
              <li><span>XL</span></li>
            </ul>

            <p>{product.description}</p>

            <div onClick={fav} className='flex my-5 cursor-pointer w-48'>
              <p>Agregar a Favoritos</p>
              {
                favorite ?
                  <FavoriteIcon className='mx-3' sx={{ color: pink[500] }} /> :
                  <FavoriteBorderIcon className='mx-3' />
              }
            </div>

            {counter ? <ItemCount onAdd={onAdd} stock={5} /> : <Link to={'/cart'}><button className='w-4/5 h-10 bg-blue-600 text-white my-2 rounded-md mt-5'>Terminar Mi compra</button></Link>}

          </div>
        </div>
      </>)
  )
}

export default ItemDescription