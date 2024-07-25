import {
  ProdutoContainer,
  ProdutoButton,
  ProdutoDetalhes,
  ProdutoImagem,
  ProdutoInformacoes,
  ProdutoTitulo
} from './style'
import { Estrutura } from '../store/reducers/consumoApi'
import { useDispatch } from 'react-redux'
import { alterar } from '../store/reducers/modal'
type PropProduto = Omit<Estrutura, 'tipo' | 'avaliacao' | 'cardapio'>
const Produto = ({ capa, descricao, titulo, id }: PropProduto) => {
  const dispatch = useDispatch()
  return (
    <ProdutoContainer>
      <ProdutoImagem src={capa} />
      <ProdutoInformacoes>
        <ProdutoTitulo>{titulo}</ProdutoTitulo>
        <ProdutoDetalhes>{descricao}</ProdutoDetalhes>
      </ProdutoInformacoes>
      <ProdutoButton
        onClick={() => dispatch(alterar({ estado: true, id: id }))}
      >
        Mais detalhes
      </ProdutoButton>
    </ProdutoContainer>
  )
}

export default Produto
