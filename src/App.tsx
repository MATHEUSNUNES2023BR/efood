import { BrowserRouter } from 'react-router-dom'
import Rotas from './components/routes'
import Footer from './components/Footer'
import EstiloGlobal from './styles'
import { Provider } from 'react-redux'
import store from './components/store'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
