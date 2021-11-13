import './App.css';
import Contador from './components/Contador.component';
import ContadorReducer from './components/ContadorReducer/ContadorReducer.component';
import Data from './components/Data.component';
import Saludo from './components/Saludo.component';

function App() {
  return (
    <div className="App">
      <Saludo nombre="andres" apellido="villa" />
      <Contador />
      <ContadorReducer />
      <Data />
    </div>
  );
}

export default App;
