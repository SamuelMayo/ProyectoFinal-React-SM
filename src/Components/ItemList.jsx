import React from 'react'
import Item from './Item';


const ItemList = ({products}) => {


    return (
        <div className='w-11/12'>
            <div className='flex justify-around flex-wrap m-4 gap-3.5'>
                {products.map((product)=>{

                    return <Item key={product.id} product={product}/>

                })}
            </div>
        </div>
    )
}

export default ItemList