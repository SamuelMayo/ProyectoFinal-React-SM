import React, { useState, createContext } from 'react'
import { useEffect } from 'react'


export const contextCart = createContext()
const { Provider } = contextCart

const CartContext = ({ children }) => {

    const [cartList, setCartlist] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        showStorage();
    }, [])

    const addProducts = (product) => {
        let item = cartList.find(prod => prod.id === product.id)
        let aux = [...cartList]
        if (item) {
            let index = aux.indexOf(item)
            aux[index].quantity += product.quantity
        } else {
            aux = [...cartList, product]
        }
        setCartlist(aux)
        sincroStorage(aux);
    }

    const removeItem = (product) => {
        let aux = [...cartList]
        const found = aux.find(aux => aux.id === product.id)
        aux = aux.filter(product => product.id !== found.id)
        setCartlist(aux)
        sincroStorage(aux);
    }

    const clear = () => {
        setCartlist([])
        let aux = []
        sincroStorage(aux)
    }


    const sincroStorage = (cart) => {
        localStorage.setItem('prod', JSON.stringify(cart))
    }


    const showStorage = () => {
        setCartlist(JSON.parse(localStorage.getItem('prod')) || [])
    }

    return (
        <Provider value={{ addProducts, cartList, removeItem, clear, totalPrice, setTotalPrice }}>
            {children}
        </Provider>
    )
}

export default CartContext