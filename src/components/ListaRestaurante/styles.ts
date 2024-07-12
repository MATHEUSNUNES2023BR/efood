import { styled } from 'styled-components'

export const ContainerRestaurantes = styled.ul`
  display: grid;
  max-width: 1024px;
  gap: 38px;
  width: 100%;
  margin: 42px auto;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`
