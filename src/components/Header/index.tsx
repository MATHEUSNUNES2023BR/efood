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
export type Dado = {
  tipo?: string
  titulo?: string
  capa?: string
  id?: number
}
export type DadosArray = {
  dados: Dado
}
const Header = ({ dados }: DadosArray) => (
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

    <HeaderApresentacao Imagem={dados.capa}>
      <HeaderApresentacaoCategoria>{dados.tipo}</HeaderApresentacaoCategoria>
      <HeaderApresentacaoNome>{dados.titulo}</HeaderApresentacaoNome>
    </HeaderApresentacao>
  </ContainerHeader>
)

export default Header
