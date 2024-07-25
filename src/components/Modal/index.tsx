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
import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close-svgrepo-com.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { alterar } from '../store/reducers/modal'
import { cardapioDados } from '../ListaProduto'

type Prop = {
  children: JSX.Element[]
  cardapio: cardapioDados
}
export const Modal = ({ children, cardapio }: Prop) => {
  const modalInfo = useSelector((state: RootReducer) => state.modal.estado)
  const modalId = useSelector((state: RootReducer) => state.modal.id)
  const dispatch = useDispatch()
  const cardapioSelecionado = [cardapio.find((c) => c.id === modalId)]
  function VerificaClose() {
    if (modalInfo) {
      dispatch(alterar({ estado: false }))
    } else {
      dispatch(alterar({ estado: true }))
    }
  }
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
            <ModalClose src={close} onClick={() => VerificaClose()} />
          </ModalContainer>
        </ModalWrapper>
      ))}
    </ModalBody>
  )
}
