import styled from 'styled-components'
import { cores } from '../../styles'
import hero from '../../assets/images/hero.png'

type Props = {
  Imagem?: string
}

export const ContainerHeader = styled.header`
  display: grid;
  grid-template-rows: 156px 320px;
`
export const HeaderNav = styled.nav`
  background-image: url(${hero});
  width: 100%;
`
export const HeaderUl = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 24px;
  a {
    text-decoration: none;
  }
  .restaurante {
    margin-left: 10px;
    color: ${cores.vermelho};
    padding-bottom: 5px;
    border-bottom: 1px solid ${cores.vermelho};
  }
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    .restaurante {
      grid-row: 1;
      grid-column: 1;
    }
    .logo {
      grid-column: 2;
      grid-row: 1;
    }

    .carrinho {
      grid-row: 2;
      grid-column: 1 / -1;
    }
  }
`
export const HeaderApresentacao = styled.div<Props>`
  z-index: -1;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ Imagem }: Props) => Imagem});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 24vw;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    filter: brightness(0.7);
  }
  @media (max-width: 1024px) {
    padding-left: 10vw;
  }
`
export const HeaderApresentacaoCategoria = styled.p`
  color: ${cores.branco};
  font-size: 38px;
  padding-top: 30px;
  z-index: 1;
  font-weight: 100;
  grid-row: 1;
`
export const HeaderApresentacaoNome = styled.h2`
  color: ${cores.branco};
  font-size: 48px;
  padding-bottom: 30px;
  z-index: 1;
  width: 100%;
`
