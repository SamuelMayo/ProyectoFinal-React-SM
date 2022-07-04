import React from 'react'
import { useState } from 'react';
import Item from './Item';


const ItemList = ({products}) => {

    // const [data, setData]= useState(products)

    return (
        <div className='w-11/12'>
            <div className='flex justify-between flex-wrap m-4 gap-3.5'>
                {products.map((product)=>{

                    return <Item product={product}/>

                })}
            </div>
        </div>
    )
}

export default ItemList