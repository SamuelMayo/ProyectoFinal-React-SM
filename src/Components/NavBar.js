import { height } from '@mui/system'
import logo from '../icons-imgs/logo.png'
import CartWidget from './CartWidget'

const NavBar =() =>{
    return(
        <header style={styles.container}>
            <div style={styles.titleCont}>
                <img style={styles.imgLogo} src={logo} alt="Logo" />
                <h1 style={styles.h1Logo}>VendeLoTuyo.com</h1>
            </div>
            <nav style={styles.navCont}>
                <a style={styles.a} href="">Hombres</a>
                <a style={styles.a} href="">Mujeres</a>
                <a style={styles.a} href="">Niños</a>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar

const styles ={
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "0px 30px 0px 30px",
        borderBottom:'2px solid lightGray',
        width:'100%',
        height:'80px',
        marginBottom:'25px',
        overflow:"hidden",
    },
    titleCont:{
        display: 'flex',
        alignItems: 'center',
    },
    imgLogo:{
        width: '150px',
    },
    h1Logo:{
        fontSize:'25px',
        fontWeight:'bold',
    },
    navCont:{
        width: "300px" ,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    a:{
        color: 'black',
        textDecoration: 'none',
        fontSize: '20px',
        fontWeight: 'bold'

    }
}