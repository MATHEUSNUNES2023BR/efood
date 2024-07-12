import {
  ContainerFooter,
  FooterLogo,
  FooterRedes,
  FooterRodape
} from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
const Footer = () => (
  <ContainerFooter>
    <FooterLogo src={logo} />
    <FooterRedes>
      <img src={instagram} alt="Instagram" />
      <img src={facebook} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
    </FooterRedes>
    <FooterRodape>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterRodape>
  </ContainerFooter>
)
export default Footer
