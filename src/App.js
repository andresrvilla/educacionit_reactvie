import './App.css';
import HomePage from './components/HomePage.component'
import store from './state/store'
import { Provider } from 'react-redux'

function App() {

  return <Provider store={store}>
    <HomePage />
  </Provider>
}

export default App;
