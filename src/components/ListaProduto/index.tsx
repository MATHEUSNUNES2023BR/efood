import Produto from '../Produto'
import { ContainerProduto } from './style'
export type CardapioDados = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
export type ArrayCardapio = CardapioDados[]

interface ListaProdutoProps {
  produtos: ArrayCardapio
}

const ListaProduto = ({ produtos }: ListaProdutoProps) => (
  <ContainerProduto>
    {produtos !== undefined
      ? produtos.map((restaurante) => (
          <Produto
            id={restaurante.id}
            key={restaurante.id}
            capa={restaurante.foto}
            titulo={restaurante.nome}
            descricao={restaurante.descricao}
          />
        ))
      : ''}
  </ContainerProduto>
)

export default ListaProduto
