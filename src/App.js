
import NavBar from './Components/NavBar';
import './App.css';
import ItemListContainer from './views/ItemListContainer'
import ItemDescriptionContainer from './views/ItemDescriptionContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer
      mensaje="Hola Soy Samuel :)" 
      />
      <ItemDescriptionContainer />
    </BrowserRouter>
  );
}

export default App;
