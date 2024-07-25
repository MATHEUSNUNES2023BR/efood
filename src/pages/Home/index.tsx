import { useSelector } from 'react-redux'
import { RootReducer } from '../../components/store'
import Hero from '../../components/Hero'
import ListaRestaurante from '../../components/ListaRestaurante'
import Footer from '../../components/Footer'

const Home = () => {
  const dados = useSelector((state: RootReducer) => state.apiDados)
  return (
    <>
      <Hero />
      <ListaRestaurante dadosRestaurante={dados} />
      <Footer />
    </>
  )
}

export default Home
