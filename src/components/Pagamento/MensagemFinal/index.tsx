import { Button, CartContainer, Overlay, SideBar } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeMesage, limpar } from '../../store/reducers/cart'
const MesagemFinal = () => {
  const { isOpenMesage, hash } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  return (
    <CartContainer className={isOpenMesage ? 'is-open' : ''}>
      <Overlay />
      <SideBar>
        <h3>Pedido realizado - {hash}</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br /> <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br /> <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button
          type="button"
          onClick={() => {
            dispatch(closeMesage()), dispatch(limpar())
          }}
        >
          Concluir
        </Button>
      </SideBar>
    </CartContainer>
  )
}
export default MesagemFinal
