import ClasseRestaurante from '../../models/ClasseRestaurante'
import Produto from '../Produto'
import { ContainerProduto } from './style'

type Props = {
  Produtos: ClasseRestaurante[]
}
const ListaProduto = ({ Produtos }: Props) => (
  <ContainerProduto>
    {Produtos.map((p) => (
      <Produto
        key={p.id}
        image={p.image}
        titulo={p.titulo}
        detalhes={p.detalhes}
      />
    ))}
  </ContainerProduto>
)

export default ListaProduto
