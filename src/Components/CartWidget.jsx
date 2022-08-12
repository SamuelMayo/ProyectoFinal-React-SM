import React, { useContext, useEffect, useState } from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { contextCart } from './CartContext';

const CartWidget = () => {

  const { cartList } = useContext(contextCart)

  const [totalProducts, setTotalProducts] = useState(0)


  useEffect(() => {

    const quantityTotalProducts = () => {
      let count = 0
      cartList.forEach(product => {
        count += product.quantity;
      })
      setTotalProducts(count)
    }
    quantityTotalProducts();

  }, [cartList])


  return (
    <div className='flex'>
      <ShoppingCartCheckoutIcon />
      {totalProducts !== 0 ? <p>{totalProducts}</p> : <p></p>}
    </div>
  )
}

export default CartWidget