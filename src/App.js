
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

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/item/:itemId' element={<ItemDescriptionContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
