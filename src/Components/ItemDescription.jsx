import React from 'react'

const ItemDescription = ({product}) => {


  return (
    
    product.category && (
    <>
        <div className='flex justify-center mt-5 w-11/12'>
            <img className='w-2/5 h-96 mx-3' src={product.category.image} alt={product.title} />
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
                
            </div>
        </div>
    </>)
  )
}

export default ItemDescription