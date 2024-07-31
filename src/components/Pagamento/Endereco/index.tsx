import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Button,
  CartContainer,
  Cep,
  Endereco,
  Overlay,
  SideBar,
  ContainerButton
} from './style'
import { RootReducer } from '../../store'
import {
  closeEndereco,
  openCart,
  openPayament
} from '../../store/reducers/cart'

const EnderecoPagamento = () => {
  const { isOpenEndereco } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [cep, setCep] = useState<string>('')

  const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    value = value.replace(/\D/g, '')
    if (value.length > 5) {
      value = value.substring(0, 5) + '-' + value.substring(5)
    }

    setCep(value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(closeEndereco())
    dispatch(openPayament())
  }
  const closeCartNow = () => {
    dispatch(closeEndereco())
  }
  return (
    <CartContainer className={isOpenEndereco ? 'is-open' : ''}>
      <Overlay onClick={closeCartNow} />
      <SideBar>
        <h3>Entrega</h3>
        <Endereco onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Quem Ira Receber</label>
            <input type="text" required />
          </div>
          <div>
            <label htmlFor="">Endereco</label>
            <input type="text" required />
          </div>
          <div>
            <label htmlFor="">Cidade</label>
            <input type="text" required />
          </div>
          <Cep>
            <div>
              <label htmlFor="">CEP</label>
              <input
                type="text"
                required
                placeholder="00000-000"
                maxLength={9}
                value={cep}
                pattern="\d{5}-\d{3}"
                title="Por favor, insira o CEP no formato 00000-000"
                onChange={handleCepChange}
              />
            </div>
            <div>
              <label htmlFor="">Número</label>
              <input type="text" required min={8} />
            </div>
          </Cep>
          <div>
            <label htmlFor="">Completo(opcional)</label>
            <input type="text" />
          </div>
          <ContainerButton>
            <Button type="submit">Continuar com pagamento</Button>
            <Button
              type="button"
              onClick={() => {
                dispatch(closeEndereco()), dispatch(openCart())
              }}
            >
              Voltar para o carrinho
            </Button>
          </ContainerButton>
        </Endereco>
      </SideBar>
    </CartContainer>
  )
}
export default EnderecoPagamento
