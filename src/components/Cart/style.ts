import { styled } from 'styled-components'
import fechar from '../../assets/images/close.svg'
import { cores } from '../../styles'
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

  button {
    background-color: ${cores.pessego_escuro};
    color: ${cores.vermelho};
    font-weight: bold;
    border: none;
    max-width: 100%;
    width: 100%;
    height: 30px;
    margin-top: 20px;
    cursor: pointer;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.pessego_escuro};
  margin-top: 30px;
  span {
    display: inline-block;
    margin-left: 150px;
    font-size: 16px;
    color: ${cores.pessego_escuro};
  }
`
export const Quatity = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branco};
  margin-top: 32px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.pessego_escuro};
  padding: 8px 0;
  position: relative;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    color: ${cores.branco};
    font-weight: bold;
    font-size: 14px;
  }
  span {
    display: block;
    color: ${cores.branco};
    font-weight: bold;
    font-size: 14px;
  }
  button {
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
    img {
      width: 16px;
      height: 16px;
    }
  }
`
