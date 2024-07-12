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
        pontuacao={r.pontuacao as number}
        detalhes={r.detalhes}
        infos={r.infos as []}
        categoria={r.categoria}
      />
    ))}
  </ContainerRestaurantes>
)
export default ListaRestaurante
