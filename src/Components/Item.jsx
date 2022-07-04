import React from 'react'

const Item = ({product}) => {

    
  return (
    <div className='w-60 h-96 m-4 flex flex-col items-center border-2 border-gray-700 rounded-xl p-2'>
        <img className='w-4/5 h-3/4 object-cover rounded-xl' key={product.img} src={product.imgUrl} alt={product.title} />
        <div className='w-4/5 h-1/5'>
            <h5 className='font-bold text-base' key={product.title}>{product.title}</h5>
            <p className='font-bold text-base' key={product.price}>{product.price}$</p>
            <p className='text-xs' key={product.description}>{product.description}</p>
        </div>
    </div>
  )
}

export default Item