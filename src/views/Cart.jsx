import React, {useContext} from 'react'
import { contextCart } from '../Components/CartContext'


const Cart = () => {

  const {cartList}= useContext(contextCart)
  // console.log(cartList);

  return (
    <div>Cart</div>
  )
}

export default Cart