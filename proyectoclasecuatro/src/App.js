import logo from './logo.svg';
import './App.css';
import EstilosHOC from './hoc/EstilosHOC.component';
import Hover from './hoc/Hover';

function App() {
  return (
    <div className="App">
      <h1>High Order Component</h1>
      <h2>Agrego div con el HOC</h2>
      { EstilosHOC(() =><input type="text" />) }
      { EstilosHOC(() =><input type="text" value="Segundo Componente" />) }
      { EstilosHOC(() =><h3>Hola Mundo</h3>) }
      <h2>Cambie el estilo con el mouse hover</h2>
      { Hover( () => <span>Pasame el mouse por arriba</span>)}
      <hr />
      <h1>Render Props</h1>
    </div>
  );
}

export default App;
