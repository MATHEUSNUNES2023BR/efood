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
import { add, openCart } from '../store/reducers/cart'
import { closeModal } from '../store/reducers/modal'
import { ArrayCardapio } from '../ListaProduto'

type Prop = {
  children: JSX.Element[]
  cardapio: ArrayCardapio
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
              <ModalBotao
                onClick={() => {
                  dispatch(openCart()),
                    dispatch(add(dados!)),
                    dispatch(closeModal())
                }}
              >
                Adicionar ao carrinho <span>R${dados?.preco}</span>
              </ModalBotao>
            </ModalInformacoesContainer>
            <ModalClose
              src={closeButton}
              onClick={() => dispatch(closeModal())}
            />
          </ModalContainer>
        </ModalWrapper>
      ))}
    </ModalBody>
  )
}
