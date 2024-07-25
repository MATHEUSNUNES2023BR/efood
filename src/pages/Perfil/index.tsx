import { RootReducer } from '../../components/store'
import { useSelector } from 'react-redux'
import { Estrutura } from '../../components/store/reducers/consumoApi'
import Header from '../../components/Header'
import ListaProduto, { cardapioDados } from '../../components/ListaProduto'
import { useParams } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import Footer from '../../components/Footer'

const Perfil = () => {
  const { id } = useParams()
  const converteId = parseInt(id as unknown as string)
  const dados = useSelector((state: RootReducer) => state.apiDados)
  const dadosRestauranteSelecionado = dados.find((restaurente) => {
    if (restaurente.id === converteId) {
      return restaurente
    }
  })

  const cardapioRestaurante = dadosRestauranteSelecionado?.cardapio
  return (
    <>
      {dados.length === 0 ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <Modal cardapio={cardapioRestaurante as cardapioDados}>
            <Header dados={dadosRestauranteSelecionado as Estrutura} />
            <ListaProduto dadosArray={cardapioRestaurante} />
            <Footer />
          </Modal>
        </>
      )}
    </>
  )
}

export default Perfil
