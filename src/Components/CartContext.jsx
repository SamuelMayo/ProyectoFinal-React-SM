import React, {useState,createContext} from 'react'


export const contextCart=createContext()
const {Provider} = contextCart

const CartContext = ({children}) => {

    const [cartList, setCartlist]= useState([])
    
    
    const addProducts=(product)=>{
        if(isInCart(product.id)){

            const aux= [...cartList]
            const found = aux.find(prod=>prod.id===product.id)
            found.quantity+= product.quantity
            
            setCartlist(aux)
        }else{

            setCartlist([...cartList, product])
        }
    }
    
    const removeItem=(id)=>{

        const aux =[...cartList]
        const found= aux.find(product=> product.id === id )
        aux= aux.filter(product=>product.id != found.id)

        setCartlist(aux)
    }

    const clear= ()=>{

        setCartlist([])

    }

    const isInCart=(id)=>{

        cartList.some(product=>product.id===id)
    }



    // console.log(cartList);

    return (
    <Provider value={[addProducts,{cartList}]}>
        {children}
    </Provider>
    )
}

export default CartContext