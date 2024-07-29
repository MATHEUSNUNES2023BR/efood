import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { capturar } from '../store/reducers/dadosHeader'
import estrela from '../../assets/images/estrela.png'
import {
  Avaliacao,
  Infos,
  InfosContainer,
  Restaurante,
  RestauranteButton,
  RestauranteDetalhes,
  RestauranteImagem,
  RestauranteInformacoes,
  RestauranteTitulo
} from './style'
import { Estrutura } from '../../pages/Home'
type PropProduto = Omit<Estrutura, 'cardapio'>

const Restaurantes = ({
  id,
  capa,
  avaliacao,
  descricao,
  tipo,
  titulo
}: PropProduto) => {
  const dispatch = useDispatch()

  return (
    <Restaurante>
      <RestauranteImagem src={capa} />
      <RestauranteInformacoes>
        <RestauranteTitulo>{titulo}</RestauranteTitulo>
        <RestauranteDetalhes>{descricao}</RestauranteDetalhes>
        <Link to={`/produtos/${id}`}>
          <RestauranteButton
            onClick={() =>
              dispatch(
                capturar({
                  id: id
                })
              )
            }
          >
            Saiba mais
          </RestauranteButton>
        </Link>
        <Avaliacao>
          <div>{avaliacao}</div>
          <img src={estrela} alt="" />
        </Avaliacao>
        <InfosContainer>
          <Infos>{tipo}</Infos>
        </InfosContainer>
      </RestauranteInformacoes>
    </Restaurante>
  )
}
export default Restaurantes
