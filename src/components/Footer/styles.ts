import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.footer`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-rows: 109px 80px 109px;
  width: 100%;
  height: 298px;
  background-color: ${cores.pessego_escuro};
`
export const FooterLogo = styled.img``

export const FooterRedes = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-around;
`

export const FooterRodape = styled.p`
  max-width: 780px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: ${cores.vermelho};
`
