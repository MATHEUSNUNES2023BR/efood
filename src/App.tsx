import { BrowserRouter } from 'react-router-dom'
import Rotas from './components/routes'
import Footer from './components/Footer'
import EstiloGlobal from './styles'
import { Provider } from 'react-redux'
import store from './components/store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
