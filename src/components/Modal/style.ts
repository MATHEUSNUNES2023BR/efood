import { styled } from 'styled-components'
import { cores } from '../../styles'
type Prop = {
  display: boolean
}
export const ModalBody = styled.div`
  width: 100%;
  position: relative;
  z-index: 4;
`
export const ModalWrapper = styled.div<Prop>`
  display: ${(Prop) => (Prop.display === true ? 'block' : 'none')};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`
export const ModalContainer = styled.div`
  top: 30%;
  left: 25%;
  width: 50%;
  height: 400px;
  background-color: ${cores.vermelho};
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  @media (max-width: 1024px) {
    width: 90%;
    left: 5%;
  }
  @media (max-width: 576px) {
    width: 95%;
    top: 10%;
    left: 2.5%;
    flex-direction: column;
    height: 600px;
  }
`
export const ModalClose = styled.img`
  position: absolute;
  width: 30px;
  top: 10px;
  right: 20px;
  cursor: pointer;
`
export const ModalImage = styled.img`
  width: 40%;
  height: 70%;
  align-self: center;
  padding-left: 30px;
  @media (max-width: 576px) {
    width: 300px;
    padding-left: 0;
    padding-top: 60px;
  }
`
export const ModalInformacoesContainer = styled.div`
  display: flex;
  height: 75%;
  flex-direction: column;
`
export const ModalNome = styled.h2`
  font-size: 18px;
  color: ${cores.branco};
  font-weight: 900;
  @media (max-width: 576px) {
    padding-left: 10px;
  }
`
export const ModalDescricao = styled.p`
  width: 95%;
  text-align: justify;
  font-size: 14px;
  color: ${cores.branco};
  margin-top: 20px;
  @media (max-width: 576px) {
    padding-left: 10px;
  }
`
export const ModalPorcao = styled.h4`
  font-size: 14px;
  color: ${cores.branco};
  margin-top: 20px;
  @media (max-width: 576px) {
    padding-left: 10px;
  }
`
export const ModalBotao = styled.button`
  background-color: ${cores.pessego};
  color: ${cores.vermelho};
  font-weight: 900;
  width: 250px;
  height: 30px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: auto;
  @media (max-width: 576px) {
    align-self: center;
    margin-top: 40px;
  }
`
