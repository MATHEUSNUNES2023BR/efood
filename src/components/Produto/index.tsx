import {
  ProdutoContainer,
  ProdutoButton,
  ProdutoDetalhes,
  ProdutoImagem,
  ProdutoInformacoes,
  ProdutoTitulo
} from './style'
import { Props } from '../Restaurante'
type PropProduto = Omit<Props, 'infos' | 'pontuacao'>

const Produto = ({ image, detalhes, titulo }: PropProduto) => (
  <ProdutoContainer>
    <ProdutoImagem src={image} />
    <ProdutoInformacoes>
      <ProdutoTitulo>{titulo}</ProdutoTitulo>
      <ProdutoDetalhes>{detalhes}</ProdutoDetalhes>
      <ProdutoButton>Adicionar ao carrinho</ProdutoButton>
    </ProdutoInformacoes>
  </ProdutoContainer>
)

export default Produto
