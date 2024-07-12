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
}

const Restaurantes = ({ image, titulo, detalhes, pontuacao, infos }: Props) => (
  <Restaurante>
    <RestauranteImagem src={image} />
    <RestauranteInformacoes>
      <RestauranteTitulo>{titulo}</RestauranteTitulo>
      <RestauranteDetalhes>{detalhes}</RestauranteDetalhes>
      <RestauranteButton>Saiba mais</RestauranteButton>
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
export default Restaurantes
