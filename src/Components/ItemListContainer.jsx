import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({mensaje}) => {
    
  const onAdd= ()=>{
    alert(`Tu producto se ha agregado al carrito`)
  }

    return (
    <div>
        <h2>{mensaje}</h2>

        <ItemCount initial={1} stock= {5} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer