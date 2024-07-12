import {
  ContainerHeader,
  HeaderApresentacao,
  HeaderApresentacaoNome,
  HeaderApresentacaoCategoria,
  HeaderNav,
  HeaderUl
} from './styles'
import logo from '../../assets/images/logo.png'
const Header = () => (
  <ContainerHeader>
    <HeaderNav>
      <HeaderUl>
        <li className="restaurante">Restaurantes</li>
        <li className="logo">
          <img src={logo} alt="" />
        </li>
        <li className="carrinho">
          <div>0 produto(s) no carrinho</div>
        </li>
      </HeaderUl>
    </HeaderNav>

    <HeaderApresentacao>
      <HeaderApresentacaoCategoria>Italiana</HeaderApresentacaoCategoria>
      <HeaderApresentacaoNome>La Dolce Vita Trattoria</HeaderApresentacaoNome>
    </HeaderApresentacao>
  </ContainerHeader>
)

export default Header
