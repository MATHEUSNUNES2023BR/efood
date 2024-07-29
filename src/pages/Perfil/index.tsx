import { Estrutura } from '../Home'
import { useParams } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import Footer from '../../components/Footer'
import { useGetBaseUrlQuery } from '../../components/services/api'
import ListaProduto, { ArrayCardapio } from '../../components/ListaProduto'
import Header from '../../components/Header'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()
  const converteId = parseInt(id as unknown as string, 10)
  const { data, isLoading } = useGetBaseUrlQuery()

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  if (!data) {
    return <h1>Erro ao carregar dados</h1>
  }

  const dadosRestauranteSelecionado = data.find(
    (restaurante) => restaurante.id === converteId
  )

  if (!dadosRestauranteSelecionado) {
    return <h1>Restaurante não encontrado</h1>
  }

  const cardapioRestaurante = dadosRestauranteSelecionado.cardapio

  return (
    <Modal cardapio={cardapioRestaurante as ArrayCardapio}>
      <Header dados={dadosRestauranteSelecionado as Estrutura} />
      <ListaProduto produtos={cardapioRestaurante} />
      <Footer />
      <Cart />
    </Modal>
  )
}

export default Perfil
