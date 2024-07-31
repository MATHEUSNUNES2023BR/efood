import { ChangeEvent, useState } from 'react'
import {
  Button,
  CartContainer,
  Cartao,
  Endereco,
  Overlay,
  SideBar,
  ContainerButton
} from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  closePayament,
  gerarHashELimpar,
  openEndereco,
  openMesage
} from '../../store/reducers/cart'

const DadosCartao = () => {
  const { isOpenPayment } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [ponto, setPonto] = useState<string>('')

  const handlePontoChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    value = value.replace(/\D/g, '')
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1.')
    setPonto(formattedValue)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(closePayament())
    dispatch(openMesage())
    dispatch(gerarHashELimpar())
  }
  const closeCartNow = () => {
    dispatch(closePayament())
  }
  return (
    <CartContainer className={isOpenPayment ? 'is-open' : ''}>
      <Overlay onClick={closeCartNow} />
      <SideBar>
        <h3>Pagamento - Valor a pagar ${}</h3>
        <Endereco onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Nome no cartão</label>
            <input type="text" required />
          </div>
          <Cartao>
            <div className="cartaoNumero">
              <label htmlFor="">Número do cartão</label>
              <input
                type="text"
                required
                maxLength={19}
                pattern="\d{4}.\d{4}.\d{4}.\d{4}"
                value={ponto}
                title="Por favor, insira um cartão valido"
                onChange={handlePontoChange}
              />
            </div>
            <div className="cartaoCVV">
              <label htmlFor="">CVV</label>
              <input type="text" min={3} maxLength={3} required />
            </div>
          </Cartao>
          <Cartao>
            <div className="cartaoMes">
              <label htmlFor="">Mês vecimento</label>
              <input type="text" required maxLength={2} />
            </div>
            <div className="cartaoAno">
              <label htmlFor="">Ano de vecimento</label>
              <input type="text" required maxLength={4} />
            </div>
          </Cartao>
          <ContainerButton>
            <Button type="submit">Finalizar pagamento</Button>
            <Button
              type="button"
              onClick={() => {
                dispatch(closePayament()), dispatch(openEndereco())
              }}
            >
              Voltar para edições de endereço
            </Button>
          </ContainerButton>
        </Endereco>
      </SideBar>
    </CartContainer>
  )
}
export default DadosCartao
