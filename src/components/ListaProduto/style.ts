import { styled } from 'styled-components'
import { ContainerRestaurantes } from '../ListaRestaurante/styles'

export const ContainerProduto = styled(ContainerRestaurantes)`
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  position: relative;
  z-index: -1;
`
