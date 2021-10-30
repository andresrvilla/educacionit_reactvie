import logo from './logo.svg';
import './App.css';
import Registracion from './components/registracion/registracion.component';
import Credencial from './components/credencial/credencial.component';
import PersonaProvider from './components/personaprovider/personaprovider.component';
import SelectorIdioma from './components/selectoridioma/selectoridioma.component'
import MostrarIdioma from './components/mostraridioma/mostraridioma.component';
import IdiomaProvider from './components/idiomaprovider/idiomaprovider.component'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          Formulario de registración del evento
        </Toolbar>
      </AppBar>
      <IdiomaProvider>
        <SelectorIdioma /><br />
        <PersonaProvider>
          <Registracion />
          <hr />
          <Credencial />
        </PersonaProvider>
        <hr />
        <MostrarIdioma />
      </IdiomaProvider>

    </>
  );
}

export default App;
