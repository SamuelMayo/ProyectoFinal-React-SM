import React, { useContext } from 'react'
import ItemFavorite from './ItemFavorite'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { contextFav } from './FavContext';


const Favorites = ({ showFav, showFavorites }) => {

    const { favoriteList } = useContext(contextFav)

    return (
        <>
            {
                showFavorites ?

                    <div style={styles.container} className='w-3/4 h-4/5 z-10 absolute bg-white border-4 border-gray-300 rounded-md'>
                        <>
                            <div className='flex justify-center item-center w-4/4 pb-8 border-b-2'>
                                <h2 className='text-2xl text-center font-bold underline mt-3'>Mis Favoritos</h2>
                                <div onClick={showFav} className='absolute right-1 mt-3 cursor-pointer'>
                                    <CloseIcon />
                                </div>
                            </div>

                            {!favoriteList.length ?

                                <div className='text-center mt-6'>
                                    <h3 className='text-lg'>Aun no tienes productos en Favoritos</h3>
                                    <Link to={'/'}><button onClick={showFav} className='w-1/4 h-8 bg-blue-600 text-white my-2 rounded-md mt-5'>Ir a Productos</button></Link>
                                </div> :


                                <div className='w-11/12 h-4/5 mb-7 mt-5 mx-auto flex flex-col overflow-y-scroll'>
                                    {favoriteList.map((product) => {

                                        return <ItemFavorite key={product.id} product={product} />

                                    })}

                                </div>
                            }
                        </>
                    </div> :

                    <span></span>

            }
        </>
    )


}

export default Favorites


const styles = {
    container: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}