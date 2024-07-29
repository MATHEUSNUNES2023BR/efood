import {
  ModalBody,
  ModalBotao,
  ModalClose,
  ModalContainer,
  ModalDescricao,
  ModalImage,
  ModalInformacoesContainer,
  ModalNome,
  ModalPorcao,
  ModalWrapper
} from './style'
import closeButton from '../../assets/images/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { close } from '../store/reducers/modal'
import { CardapioDados } from '../ListaProduto'

type Prop = {
  children: JSX.Element[]
  cardapio: CardapioDados
}
export const Modal = ({ children, cardapio }: Prop) => {
  const modalInfo = useSelector((state: RootReducer) => state.modal.estado)
  const modalId = useSelector((state: RootReducer) => state.modal.id)
  const dispatch = useDispatch()
  const cardapioSelecionado = [cardapio.find((c) => c.id === modalId)]
  return (
    <ModalBody>
      {children}
      {cardapioSelecionado?.map((dados) => (
        <ModalWrapper display={modalInfo} key={dados?.id}>
          <ModalContainer>
            <ModalImage src={dados?.foto} />
            <ModalInformacoesContainer>
              <ModalNome>{dados?.nome}</ModalNome>
              <ModalDescricao>{dados?.descricao}</ModalDescricao>
              <ModalPorcao>Serve de: {dados?.porcao}</ModalPorcao>
              <ModalBotao>
                Adicionar ao carrinho <span>R${dados?.preco}</span>
              </ModalBotao>
            </ModalInformacoesContainer>
            <ModalClose src={closeButton} onClick={() => dispatch(close())} />
          </ModalContainer>
        </ModalWrapper>
      ))}
    </ModalBody>
  )
}
