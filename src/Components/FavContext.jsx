import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const contextFav = createContext()
const { Provider } = contextFav

const FavContext = ({ children }) => {
    const [favoriteList, setFavoriteList] = useState([])

    useEffect(() => {
        showStorageFavorite();
    }, [])

    const addFavorite = (product) => {
        let item = favoriteList.find(prod => prod.id === product.id)
        let aux = [...favoriteList]

        if (item) {
            removeFavorite(item.id)
        } else {
            aux = [...favoriteList, product]
            setFavoriteList(aux);
            sincroStorageFavorite(aux);
        }
    }

    const removeFavorite = (id) => {
        let aux = [...favoriteList]
        aux = aux.filter(product => product.id !== id)
        setFavoriteList(aux);
        sincroStorageFavorite(aux);
    }

    const sincroStorageFavorite = (list) => {
        localStorage.setItem('favs', JSON.stringify(list))
    }

    const showStorageFavorite = () => {
        setFavoriteList(JSON.parse(localStorage.getItem('favs')) || [])
    }

    return (
        <Provider value={{ addFavorite, favoriteList }}>
            {children}
        </Provider>
    )
}

export default FavContext