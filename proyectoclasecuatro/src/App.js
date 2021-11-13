import logo from './logo.svg';
import './App.css';
import EstilosHOC from './hoc/EstilosHOC.component';
import Hover from './hoc/Hover';
import Usuario from './components/usuario';
import withDebug from './hoc/WithDebug';
import HoverRP from './renderprops/HoverRenderProp';
import HoverChildren from './renderprops/HoverChildren';
import Fetcher from './renderprops/Fetcher'

const UsuarioConDebug = withDebug(Usuario);

function App() {
  return (
    <div className="App">
      <h1>High Order Component</h1>
      <h2>Agrego div con el HOC</h2>
      {EstilosHOC(() => <input type="text" />)}
      {EstilosHOC(() => <input type="text" value="Segundo Componente" />)}
      {EstilosHOC(() => <h3>Hola Mundo</h3>)}
      <h2>Cambie el estilo con el mouse hover</h2>
      {Hover(() => <span>Pasame el mouse por arriba</span>)}
      <h2>Componente con debug</h2>
      <UsuarioConDebug nombre="Andres" apellido="Villa" cargo="Instructor" mail="andres.villa@educacionit.com" />
      <hr />
      <h1>Render Props</h1>
      <HoverRP render={(hovering) => <span style={{ backgroundColor: !hovering ? "white" : "#c3c3c3" }}>Mouse hover con render props</span>} />
      <HoverChildren>
        {(hovering) => <span style={{ backgroundColor: !hovering ? "white" : "#c3c3c3" }}>Mouse hover con CHILDREN</span>}
      </HoverChildren>
      <Fetcher url="https://jsonplaceholder.typicode.com/todos/1"
        render={
          (datos) => <>{JSON.stringify(datos)}</>
        } />
    </div>
  );
}

export default App;
