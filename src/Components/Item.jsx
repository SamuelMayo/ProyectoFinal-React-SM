import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {

    console.log(`El Id es${product.id}`);
  return (
    <Link to={`/item/${product.id}`}>
      <div className='w-60 h-96 m-4 flex flex-col items-center border-2 border-gray-700 rounded-xl p-2'>
          <img className='w-4/5 h-3/4 object-cover rounded-xl' src={product.images[0]} alt={product.title} />
          <div className='w-4/5 h-1/5'>
              <h5 className='font-bold text-base'>{product.title}</h5>
              <p className='font-bold text-base'>{product.price}$</p>
          </div>
      </div>
    </Link>
  )
}

export default Item