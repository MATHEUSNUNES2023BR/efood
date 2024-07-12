import { ContainerHero, HeroFrase, HeroLogo } from './styles'
import logo from '../../assets/images/logo.png'
const Hero = () => (
  <ContainerHero>
    <HeroLogo src={logo} alt="Logo Efood" />
    <HeroFrase>
      Viva experiências gastronômicas no conforto da sua casa
    </HeroFrase>
  </ContainerHero>
)
export default Hero
