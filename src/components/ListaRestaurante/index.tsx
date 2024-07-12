import Restaurantes from '../Restaurante'
import ClasseRestaurante from '../../models/ClasseRestaurante'
import { ContainerRestaurantes } from './styles'

type Props = {
  restaurantes: ClasseRestaurante[]
}
const ListaRestaurante = ({ restaurantes }: Props) => (
  <ContainerRestaurantes>
    {restaurantes.map((r) => (
      <Restaurantes
        key={r.id}
        image={r.image}
        titulo={r.titulo}
        potuacao={r.pontuacao}
        detalhes={r.detalhes}
        infos={r.infos}
      />
    ))}
  </ContainerRestaurantes>
)
export default ListaRestaurante
