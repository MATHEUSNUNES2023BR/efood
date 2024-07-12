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

export type Props = {
  image: string
  titulo: string
  detalhes: string
  pontuacao: number
  infos: string[]
  categoria?: string
}
const Restaurantes = ({
  image,
  titulo,
  detalhes,
  pontuacao,
  infos,
  categoria
}: Props) => {
  const dispatch = useDispatch()

  return (
    <Restaurante>
      <RestauranteImagem src={image} />
      <RestauranteInformacoes>
        <RestauranteTitulo>{titulo}</RestauranteTitulo>
        <RestauranteDetalhes>{detalhes}</RestauranteDetalhes>
        <Link to="/produtos">
          <RestauranteButton
            onClick={() =>
              dispatch(
                capturar({
                  nomeRestaurante: titulo,
                  imagem: image,
                  categoria: categoria as string
                })
              )
            }
          >
            Saiba mais
          </RestauranteButton>
        </Link>
        <Avaliacao>
          <div>{pontuacao}</div>
          <img src={estrela} alt="" />
        </Avaliacao>
        <InfosContainer>
          {infos.map((info) => (
            <Infos key={info}>{info}</Infos>
          ))}
        </InfosContainer>
      </RestauranteInformacoes>
    </Restaurante>
  )
}
export default Restaurantes
