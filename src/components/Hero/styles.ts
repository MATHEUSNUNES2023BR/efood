import { styled } from 'styled-components'
import { cores } from '../../styles'
import hero from '../../assets/images/hero.png'
export const ContainerHero = styled.header`
  width: 100%;
  height: 300px;
  background-image: url(${hero});
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeroLogo = styled.img`
  margin-top: 24px;
`

export const HeroFrase = styled.h1`
  width: 550px;
  text-align: center;
  font-size: 36px;
  font-weight: bolder;
  color: ${cores.vermelho};
  background: transparent;
  margin-top: 96px;
`
