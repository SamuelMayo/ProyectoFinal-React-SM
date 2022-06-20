import logo from '../icons-imgs/logo.png'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { flexbox } from '@mui/system';

const NavBar =() =>{
    return(
        <header style={styles.container}>
            <div style={styles.titleCont}>
                <img style={styles.imgLogo} src={logo} alt="Logo" />
                <h1>VendeLoTuyo.com</h1>
            </div>
            <nav style={styles.navCont}>
                <a style={styles.a} href="">Hombres</a>
                <a style={styles.a} href="">Mujeres</a>
                <a style={styles.a} href="">Niños</a>
            </nav>
            <ShoppingCartCheckoutIcon />
        </header>

    )
}

export default NavBar

const styles ={
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: "0px 30px 0px 30px",
    },
    titleCont:{
        display: 'flex',
        alignItems: 'center',
    },
    imgLogo:{
        width: '150px',
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