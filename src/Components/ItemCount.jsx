import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const ItemCount = ({ stock, initial = 1, onAdd }) => {


    const [cantidad, setCantidad] = useState(initial);

    const agg = () => {
        cantidad < stock && setCantidad(cantidad + 1)
        cantidad >= stock && toast('⚠️ No se pueden agregar mas unidades que el stock!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const dis = () => {

        cantidad <= 1 && toast('⚠️ No se pueden comprar 0  unidades!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const onQtity = () => {
        onAdd(cantidad)
    }

    return (

        <div className='w-44 border-2 border-stone-400 rounded-md text-center my-3 mx-6'>
            <p>Pant Snkinny</p>
            <div className='flex justify-center'>
                <button className='font-bold text-red-500 text-2xl' onClick={dis}>-</button>
                <p className='text-lg font-bold px-6 py-1.5'>{cantidad}</p>
                <button className='font-bold text-green-500 text-2xl' onClick={agg}>+</button>
            </div>
            <button className='w-4/5 bg-blue-600 text-white my-2 rounded-md' onClick={onQtity}>Add to Cart</button>
        </div>
    )
}

export default ItemCount