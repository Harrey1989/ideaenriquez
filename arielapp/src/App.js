import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <ItemCount></ItemCount>
    </div>
  );
}

export default App;
