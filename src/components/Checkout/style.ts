import { styled } from 'styled-components'
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
export const CheckoutContainer = styled.div`
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
  form {
    .Card_Endereco,
    .Card_Cartao {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      h3 {
        color: ${cores.pessego};
        margin-top: 20px;
        padding-left: 2%;
      }
    }

    .Card_Conclusao {
      margin-top: 20px;
      h3 {
        color: ${cores.pessego};
        margin: 20px 0;
        padding-left: 2%;
      }
      p {
        width: 96%;
        margin: 0 auto;
        color: ${cores.pessego};
      }
    }
    max-width: 360px;
    width: 100%;
    z-index: 2;
    background-color: ${cores.vermelho};
  }
`
export const CardDados = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  margin: 0 auto;
  label {
    margin-bottom: 4px;
    font-weight: 400;
  }
  input {
    height: 30px;
    background-color: ${cores.pessego_escuro};
    border: none;
  }
  color: ${cores.pessego};
`
export const CardDadosCep = styled.div`
  display: flex;
  margin: 0 auto;
  width: 98%;
  justify-content: space-between;
  ${CardDados} {
    margin: 0;
    width: 40%;
  }
`
export const ContainerButton = styled.div`
  margin-top: 8px;
`
export const CardButton = styled.button`
  width: 98%;
  margin: 14px auto;
  height: 24px;
  display: block;
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 16px;
  background-color: ${cores.pessego_escuro};
  border: none;
  cursor: pointer;
  height: 28px;
`
export const CarDadosCartao = styled(CardDadosCep)`
  width: 98%;
  display: flex;
  justify-content: space-between;
  .numero {
    width: 70%;
    input {
      width: 100%;
    }
  }
  .cvv {
    width: 20%;
    input {
      width: 100%;
    }
  }
`
export const CarDadosCartao_2 = styled(CarDadosCartao)`
  .mes {
    width: 45%;
    input {
      width: 100%;
    }
  }
  .ano {
    width: 45%;
    input {
      width: 100%;
    }
  }
`
