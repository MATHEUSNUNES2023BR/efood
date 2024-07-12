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
export type Dados = {
  categoria: string
  nomeRestaurante: string
  imagem: string
}
const Header = ({ categoria, nomeRestaurante, imagem }: Dados) => (
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
          <div>0 produto(s) no carrinho</div>
        </li>
      </HeaderUl>
    </HeaderNav>

    <HeaderApresentacao Imagem={imagem}>
      <HeaderApresentacaoCategoria>{categoria}</HeaderApresentacaoCategoria>
      <HeaderApresentacaoNome>{nomeRestaurante}</HeaderApresentacaoNome>
    </HeaderApresentacao>
  </ContainerHeader>
)

export default Header
