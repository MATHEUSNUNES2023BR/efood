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
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { openProduto } from '../store/reducers/cart'
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
  const { items } = useSelector((state: RootReducer) => state.cart)

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
            <div onClick={() => openProduto()}>
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
