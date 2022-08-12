import logo from '../icons-imgs/logo.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { db } from '../firebase/firebase.js'
import { getDocs, collection } from 'firebase/firestore'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import Favorites from './Favorites'
import { contextFav } from './FavContext'


const NavBar = () => {

    const [categories, setCategories] = useState([])
    const { favoriteList } = useContext(contextFav)

    const [showFavorites, setShowFavorites] = useState(false)

    useEffect(() => {

        const productCollection = collection(db, 'categories')
        getDocs(productCollection)
            .then(result => {
                const listCategories = result.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setCategories(listCategories)
            })
            .catch(err => console.log(err))

    }, [])

    const showFav = () => {
        setShowFavorites(current => !current)
    }



    return (
        <>
            <header style={styles.container}>
                <Link to="/"><div style={styles.titleCont}>
                    <img style={styles.imgLogo} src={logo} alt="Logo" />
                    <h1 style={styles.h1Logo}>VendeLoTuyo.com</h1>
                </div></Link>
                <nav style={styles.navCont}>
                    {categories.map((category) => {
                        return <Link key={category.id} style={styles.a} to={`/category/${category.name}`}>{category.name}</Link>
                    })}
                </nav>

                <div className='flex' >
                    <div onClick={showFav}>
                        {favoriteList.length ?

                            <FavoriteIcon className='mx-5 cursor-pointer' sx={{ color: pink[500] }} />
                            :
                            <FavoriteBorderIcon className='mx-5 cursor-pointer' />
                        }
                    </div>
                    <Link to="/cart" ><CartWidget /></Link>
                </div>


            </header>
            <Favorites showFav={showFav} showFavorites={showFavorites} />
        </>
    )
}

export default NavBar

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "0px 30px 0px 30px",
        borderBottom: '2px solid lightGray',
        width: '100%',
        height: '80px',
        marginBottom: '25px',
        overflow: "hidden",
    },
    titleCont: {
        display: 'flex',
        alignItems: 'center',
    },
    imgLogo: {
        width: '150px',
    },
    h1Logo: {
        fontSize: '25px',
        fontWeight: 'bold',
    },
    navCont: {
        width: "500px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    a: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '20px',
        fontWeight: 'bold'

    }
}