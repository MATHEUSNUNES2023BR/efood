import {
  ProdutoContainer,
  ProdutoButton,
  ProdutoDetalhes,
  ProdutoImagem,
  ProdutoInformacoes,
  ProdutoTitulo
} from './style'
import { Estrutura } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { alterar, open } from '../store/reducers/modal'
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
        onClick={() => {
          dispatch(alterar({ id: id })), dispatch(open())
        }}
      >
        Adicionar ao carrinho
      </ProdutoButton>
    </ProdutoContainer>
  )
}

export default Produto
