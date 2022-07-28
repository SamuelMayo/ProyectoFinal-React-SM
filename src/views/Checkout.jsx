import React, { useContext, useState } from 'react'
import { contextCart } from '../Components/CartContext'
import { db } from '../firebase/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'



const Checkout = () => {

    const {clear, idSale, cartList, totalPrice, setIdSale} = useContext(contextCart)
    const [purchaseEnd, setPurchaseEnd] = useState(false)

    const checkout= (userInfo)=>{
        const produtosCollection= collection(db, 'ventas');
        addDoc(produtosCollection,{
            userInfo,
            cartList,
            date:serverTimestamp(),
            totalPay: totalPrice,
        })
        .then((result)=>{
            setIdSale(result.id)
        })
        .catch((err)=>console.log(err))
    } 


    const userSubmit=(evt)=>{
        evt.preventDefault();
        let form=evt.target;
        let formData= new FormData(form)
        let userInfo={}
        formData.forEach((value, key)=>userInfo[key]=value);
        checkout(userInfo);
        clear();
        setPurchaseEnd(true)
        
    }


  return (
    <>
        {
            purchaseEnd ?
            <>
                <h3>Gracias por tu compra</h3>
                <p>{`El id de su compra es: ${idSale}`}</p>
                <button to='/'>Volver a la pantalla de inicio</button>
            </> :

            <>
                <h3>Finaliza tu compra</h3>
                <div>
                    <form id="userInfo" onSubmit={userSubmit}>
                        <label>Nombre</label>
                        <input type="text" name="name"/>
                        <label>Apellido:</label>
                        <input type="text" name="lastName"/>
                        <label>E-mail</label>
                        <input type="email" name="email"/>
                        <label>Direccion</label>
                        <input type="text" name="address"/>
                        <input type="submit" />
                    </form>
                </div>
            </>
        }

    </>
  )
}

export default Checkout