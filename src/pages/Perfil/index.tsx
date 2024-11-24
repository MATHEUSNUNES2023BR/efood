import { Estrutura } from '../Home'
import { useParams } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import Footer from '../../components/Footer'
import { useGetRestaurantSelectedQuery } from '../../components/services/api'
import ListaProduto, { ArrayCardapio } from '../../components/ListaProduto'
import Header from '../../components/Header'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'

const Perfil = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetRestaurantSelectedQuery(id as string)

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  if (!data) {
    return <h1>Erro ao carregar dados</h1>
  }

  const cardapioRestaurante = data.cardapio

  return (
    <Modal cardapio={cardapioRestaurante as ArrayCardapio}>
      <Header dados={data as Estrutura} />
      <ListaProduto produtos={cardapioRestaurante} />
      <Footer />
      <Cart />
      <Checkout />
    </Modal>
  )
}

export default Perfil
