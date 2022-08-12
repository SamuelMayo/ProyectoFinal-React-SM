import React, { useContext, useEffect } from 'react'
import { contextCart } from '../Components/CartContext'
import ItemCart from '../Components/ItemCart.jsx'
import { Link } from 'react-router-dom'


const Cart = () => {

  const { cartList, totalPrice, setTotalPrice } = useContext(contextCart)

  useEffect(() => {

    const calcPrice = () => {
      let count = 0
      cartList.forEach(product => {
        count += product.price * product.quantity
      });
      setTotalPrice(count)
    }

    calcPrice();

  }, [cartList])


  return (
    <>
      <h2 className='text-2xl text-center font-bold underline pb-8 border-b-2'>Mi Carrito</h2>
      {cartList.length === 0 ?

        <div className='text-center mt-6'>
          <h3 className='text-lg'>Aun no tienes productos en el Carrito</h3>
          <Link to={'/'}><button className='w-1/4 h-8 bg-blue-600 text-white my-2 rounded-md mt-5'>Ir a Productos</button></Link>
        </div> :



        <div className='w-11/12 mb-7 mx-auto flex flex-col items-end'>
          {cartList.map((product) => {

            return <ItemCart key={product.id} product={product} />

          })}

          <div className='w-1/4 mt-8 flex flex-col text-end'>
            <h3 className='mb-5 font-bold'>{`Total a Pagar: $${totalPrice}`}</h3>
            <Link to={'/checkout'}> <button className='border-gray-300 border w-4/5 h-10 bg-blue-600 text-white rounded'>Finalizar Compra</button></Link>
          </div>
        </div>
      }
    </>
  )
}

export default Cart