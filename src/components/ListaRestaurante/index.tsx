import Restaurantes from '../Restaurante'
import { Estrutura } from '../store/reducers/consumoApi'
import { ContainerRestaurantes } from './styles'

type PropProduto = Omit<Estrutura, 'cardapio'>
type EstruturaEstaurante = { dadosRestaurante: PropProduto[] }

const ListaRestaurante = ({ dadosRestaurante }: EstruturaEstaurante) => (
  <ContainerRestaurantes>
    {dadosRestaurante.map((r) => (
      <Restaurantes
        key={r.id}
        capa={r.capa}
        titulo={r.titulo}
        avaliacao={r.avaliacao as number}
        descricao={r.descricao}
        tipo={r.tipo}
        id={r.id}
      />
    ))}
  </ContainerRestaurantes>
)
export default ListaRestaurante
