import React, {useContext} from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {contextCart} from './CartContext';

const CartWidget = () => {

  const {totalProducts}= useContext(contextCart)

  return (
    <div className='flex'>
        <ShoppingCartCheckoutIcon />
        {totalProducts!== 0 ? <p>{totalProducts}</p>: <p></p>}
    </div>
  )
}

export default CartWidget