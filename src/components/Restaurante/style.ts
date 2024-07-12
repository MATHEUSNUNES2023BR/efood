import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Restaurante = styled.div`
  display: flex;
  flex-direction: column;
  background: ${cores.branco};
  max-width: 472px;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  position: relative;
  @media (max-width: 1024px) {
    width: 92%;
  }
  @media (max-width: 576px) {
    max-width: 400px;
    width: 95%;
  }
`

export const RestauranteImagem = styled.img`
  width: 100%;
  height: 200px;
`
export const RestauranteInformacoes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 220px;
  padding-left: 2%;
  border: 1px solid ${cores.vermelho};
  @media (max-width: 1024px) {
    height: 250px;
  }
  @media (max-width: 576px) {
    height: 280px;
  }
`
export const RestauranteTitulo = styled.h2`
  width: 80%;
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: ${cores.vermelho};
  font-weight: bolder;
`

export const RestauranteDetalhes = styled.p`
  width: 98%;
  margin-top: 20px;
  color: ${cores.vermelho};
  line-height: 22px;
  font-weight: 400;
`

export const RestauranteButton = styled.button`
  width: 100px;
  background-color: ${cores.vermelho};
  color: ${cores.pessego};
  border: none;
  line-height: 16px;
  padding: 8px;
  cursor: pointer;
  text-align: center;
  position: absolute;
  bottom: 15px;
  left: 10px;
`
export const InfosContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 20px;
`
export const Infos = styled.div`
  width: fit-content;
  padding: 8px;
  font-size: 12px;
  background-color: ${cores.vermelho};
  color: ${cores.pessego};
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  position: absolute;
  right: 15px;
  bottom: 188px;
  div {
    font-size: 18px;
    margin-right: 10px;
    color: ${cores.vermelho};
  }
  img {
    width: 20px;
  }
  @media (max-width: 1024px) {
    bottom: 217px;
  }
  @media (max-width: 576px) {
    bottom: 247px;
  }
`
