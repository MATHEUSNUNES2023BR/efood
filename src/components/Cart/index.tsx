import { useDispatch, useSelector } from 'react-redux'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quatity,
  SideBar
} from './style'
import { RootReducer } from '../store'
import { closeCart, remove } from '../store/reducers/cart'
import fechar from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeCartNow = () => {
    dispatch(closeCart())
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCartNow} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)}>
                <img src={fechar} alt="" />
              </button>
            </CartItem>
          ))}
        </ul>
        <Quatity>{items.length} produtos(s) no carrinho</Quatity>
        <Prices>
          Valor total <span> R$ {getTotalPrice().toFixed(2)}</span>
        </Prices>
        <button type={'button'} title="Clique no botão para comprar">
          Continuar com a compra
        </button>
      </SideBar>
    </CartContainer>
  )
}
export default Cart
