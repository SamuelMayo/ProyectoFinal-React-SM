
import NavBar from './Components/NavBar';
import './App.css';
import ItemListContainer from './views/ItemListContainer'
import ItemDescriptionContainer from './views/ItemDescriptionContainer'
import Cart from './views/Cart'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from './Components/CartContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      {/* Same as */}
      <ToastContainer />
        <CartContext>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryName' element={<ItemListContainer/>}></Route>
            <Route path='/item/:itemId' element={<ItemDescriptionContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </CartContext>
        <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
