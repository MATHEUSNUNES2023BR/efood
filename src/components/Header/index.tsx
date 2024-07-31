import {
  ContainerHeader,
  HeaderApresentacao,
  HeaderApresentacaoNome,
  HeaderApresentacaoCategoria,
  HeaderNav,
  HeaderUl
} from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { openCart, openEndereco, openPayament } from '../store/reducers/cart'
export type Dado = {
  tipo?: string
  titulo?: string
  capa?: string
  id?: number
}
export type DadosArray = {
  dados: Dado
}
const Header = ({ dados }: DadosArray) => {
  const { items, lastClosedSection } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  function abrirUltimaSecao() {
    switch (lastClosedSection) {
      case 'Cart':
        dispatch(openCart())
        break
      case 'Endereco':
        dispatch(openEndereco())
        break
      case 'Payment':
        dispatch(openPayament())
        break
      default:
        return ''
    }
  }
  return (
    <ContainerHeader>
      <HeaderNav>
        <HeaderUl>
          <Link to="/">
            <li className="restaurante">Restaurantes</li>
          </Link>
          <li className="logo">
            <img src={logo} alt="" />
          </li>
          <li className="carrinho">
            <div onClick={abrirUltimaSecao}>
              {items.length} produto(s) no carrinho
            </div>
          </li>
        </HeaderUl>
      </HeaderNav>

      <HeaderApresentacao Imagem={dados.capa}>
        <HeaderApresentacaoCategoria>{dados.tipo}</HeaderApresentacaoCategoria>
        <HeaderApresentacaoNome>{dados.titulo}</HeaderApresentacaoNome>
      </HeaderApresentacao>
    </ContainerHeader>
  )
}

export default Header
