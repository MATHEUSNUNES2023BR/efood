import { Estrutura } from '../Home'
import { useParams } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import Footer from '../../components/Footer'
import { useGetBaseUrlQuery } from '../../components/services/api'
import ListaProduto, { CardapioDados } from '../../components/ListaProduto'
import Header from '../../components/Header'

const Perfil = () => {
  const { id } = useParams()
  const converteId = parseInt(id as unknown as string)
  const { data } = useGetBaseUrlQuery()
  const dadosRestauranteSelecionado = data?.find((restaurente) => {
    if (restaurente.id === converteId) {
      return restaurente
    }
  })

  const cardapioRestaurante = dadosRestauranteSelecionado?.cardapio
  return (
    <>
      {data?.length === 0 ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <Modal cardapio={cardapioRestaurante as CardapioDados}>
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
