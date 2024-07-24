import {
  ProdutoContainer,
  ProdutoButton,
  ProdutoDetalhes,
  ProdutoImagem,
  ProdutoInformacoes,
  ProdutoTitulo
} from './style'
import { Estrutura } from '../store/reducers/consumoApi'
type PropProduto = Omit<Estrutura, 'tipo' | 'avaliacao' | 'id' | 'cardapio'>

const Produto = ({ capa, descricao, titulo }: PropProduto) => (
  <ProdutoContainer>
    <ProdutoImagem src={capa} />
    <ProdutoInformacoes>
      <ProdutoTitulo>{titulo}</ProdutoTitulo>
      <ProdutoDetalhes>{descricao}</ProdutoDetalhes>
    </ProdutoInformacoes>
    <ProdutoButton>Adicionar ao carrinho</ProdutoButton>
  </ProdutoContainer>
)

export default Produto
