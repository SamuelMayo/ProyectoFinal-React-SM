import React, {useContext} from 'react'
import { contextCart } from '../Components/CartContext'
import ItemCart from '../Components/ItemCart.jsx'
import {Link} from 'react-router-dom'


const Cart = () => {

  const {cartList}= useContext(contextCart)
  const {totalPrice}=useContext(contextCart)

  return (
    <>  
      <h2 className='text-2xl text-center font-bold underline pb-8 border-b-2'>Mi Carrito</h2>
      {cartList.length===0 ? 
      
      <div className='text-center mt-6'>
        <h3 className='text-lg'>Aun no tienes productos en el Carrito</h3>
        <Link to={'/'}><button className='w-1/4 h-8 bg-blue-600 text-white my-2 rounded-md mt-5'>Ir a Productos</button></Link>
      </div> : 
        
        
        
        <div className='w-11/12 mx-auto'>
          {cartList.map((product)=>{

            return <ItemCart key={product.id} product={product}/>

          })}

          <h3 className='text-end mr-52 py-5 pr-24 font-bold'>{`Total a Pagar: $${totalPrice}`}</h3>
        </div>
      }
  </>
  )
}

export default Cart