import Produto from '../Produto'
import { ContainerProduto } from './style'
export type cardapioDados = [
  {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
]
export type ArrayCardapio = { dadosArray: cardapioDados | undefined }
const ListaProduto = ({ dadosArray }: ArrayCardapio) => (
  <ContainerProduto>
    {dadosArray !== undefined
      ? dadosArray.map((restaurante) => (
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
