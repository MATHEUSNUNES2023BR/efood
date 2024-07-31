import { styled } from 'styled-components'
import { cores } from '../../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none; /* Para navegadores baseados em WebKit (Chrome, Safari) */
  }
  -ms-overflow-style: none; /* Para IE e Edge */
  scrollbar-width: none; /* Para Firefox */
  h3 {
    color: ${cores.pessego};
    margin-bottom: 10px;
  }
`
export const Endereco = styled.form`
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 4px 0;
    label {
      color: ${cores.pessego};
      padding-bottom: 6px;
    }
    input {
      border: none;
      background-color: ${cores.pessego_escuro};
      height: 30px;
    }
  }
`
export const Cep = styled.div`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between;
  div {
    width: 40%;
  }
`
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around !important;
  height: 80px;
`
export const Button = styled.button`
  display: block;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  border: none;
  height: 30px;
  color: ${cores.vermelho};
  background-color: ${cores.pessego_escuro};
`
