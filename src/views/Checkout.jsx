import React, { useContext, useState } from 'react'
import { contextCart } from '../Components/CartContext'
import { db } from '../firebase/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'


const Checkout = () => {

    const { clear, cartList, totalPrice } = useContext(contextCart)

    const [purchaseEnd, setPurchaseEnd] = useState(false)
    const [idSale, setIdSale] = useState('')

    const userSubmit = (evt) => {
        evt.preventDefault();
        let form = evt.target;
        let formData = new FormData(form)
        let userInfo = {}
        formData.forEach((value, key) => userInfo[key] = value);
        checkout(userInfo);
        clear();
        setPurchaseEnd(true)
    }


    const checkout = (userInfo) => {
        const produtosCollection = collection(db, 'ventas');
        addDoc(produtosCollection, {
            userInfo,
            cartList,
            date: serverTimestamp(),
            totalPay: totalPrice,
        })
            .then((result) => {
                setIdSale(result.id)
            })
            .catch((err) => console.log(err))
    }


    return (
        <>
            {
                purchaseEnd ?
                    <>
                        <div className='text-center'>
                            <h3 className='text-center my-5 text-2xl font-bold underline' >Gracias por tu compra</h3>
                            <p>El id de su compra es: <span className='font-bold'>{idSale}</span> </p>
                            <Link to='/'><button className='rounded-lg h-10 mt-5 border-gray-300 border w-1/4 bg-blue-600 text-white' to='/'>Volver a la pantalla de inicio</button></Link>
                        </div>
                    </> :

                    <>

                        <h3 className='text-center my-5 text-2xl font-bold underline'>Finaliza tu compra</h3>
                        <div className='py-5 mx-auto w-2/6 border-4 border-gray-300 flex justify-center rounded-lg'>
                            <form className='flex flex-col w-4/5 justify-center' id="userInfo" onSubmit={userSubmit}>
                                <label className='mb-2'>Nombre:</label>
                                <input className='rounded-lg h-10 mb-5 border-gray-300 border-2' type="text" name="name" required/>
                                <label className='mb-2'>Apellido:</label>
                                <input className='rounded-lg h-10 mb-5 border-gray-300 border-2' type="text" name="lastName" required/>
                                <label className='mb-2'>E-mail:</label>
                                <input className='rounded-lg h-10 mb-5 border-gray-300 border-2' type="email" name="email" required/>
                                <label className='mb-2'>Direccion:</label>
                                <input className='rounded-lg h-10 mb-5 border-gray-300 border-2' type="text" name="address" required />
                                <input className='rounded-lg h-10 mb-5 border-gray-300 border w-4/5 bg-blue-600 text-white mx-auto' type="submit" />
                            </form>

                        </div>
                    </>
            }

        </>
    )
}

export default Checkout