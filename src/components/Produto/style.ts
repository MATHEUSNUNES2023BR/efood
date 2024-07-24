import styled from 'styled-components'
import {
  Restaurante,
  RestauranteButton,
  RestauranteDetalhes,
  RestauranteImagem,
  RestauranteInformacoes,
  RestauranteTitulo
} from '../Restaurante/style'
import { cores } from '../../styles'

export const ProdutoContainer = styled(Restaurante)`
  margin: 0;
  padding: 0;
  background-color: ${cores.vermelho};
  max-width: 350px;
  height: 500px;
  width: 100%;
  @media (max-width: 1024px) {
    width: 90%;
    height: 390px;
  }
  @media (max-width: 576px) {
    width: 90%;
    height: 390px;
  }
`
export const ProdutoImagem = styled(RestauranteImagem)`
  padding: 10px;
`
export const ProdutoInformacoes = styled(RestauranteInformacoes)`
  padding: 0;
`
export const ProdutoTitulo = styled(RestauranteTitulo)`
  padding-left: 10px;
  color: ${cores.pessego};
  width: 95%;
`
export const ProdutoDetalhes = styled(RestauranteDetalhes)`
  padding-left: 10px;
  color: ${cores.pessego};
`

export const ProdutoButton = styled(RestauranteButton)`
  font-size: 16px;
  color: ${cores.vermelho};
  font-weight: bolder;
  border-radius: 4px;
  position: relative;
  left: 0;
  display: block;
  width: 90%;
  margin: 0 auto;
  top: 30px;
  background-color: ${cores.pessego_escuro};
`
