import { RootReducer } from '../../components/store'
import { useSelector } from 'react-redux'
import { Estrutura } from '../../components/store/reducers/consumoApi'
import Header from '../../components/Header'
import ListaProduto from '../../components/ListaProduto'
import { useParams } from 'react-router-dom'

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
        <h1>carregando</h1>
      ) : (
        <>
          <Header dados={dadosRestauranteSelecionado as Estrutura} />
          <ListaProduto dadosArray={cardapioRestaurante} />
        </>
      )}
    </>
  )
}

export default Perfil
