import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Card from '../Card'
import {
  CarDadosCartao,
  CarDadosCartao_2,
  CardButton,
  CardDados,
  CardDadosCep,
  CheckoutContainer,
  ContainerButton,
  Overlay
} from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'
import {
  closeProduto,
  gerarHashELimpar,
  openCart,
  zerarPreco
} from '../store/reducers/cart'
import { PurchasePayload, usePurchaseMutation } from '../services/api'

// Esquema de validação para endereço
const EnderecoSchema = Yup.object().shape({
  quemRecebe: Yup.string().required('Campo obrigatório'),
  endereco: Yup.string().required('Campo obrigatório'),
  cidade: Yup.string().required('Campo obrigatório'),
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
    .required('Campo obrigatório'),
  numero: Yup.string().required('Campo obrigatório'),
  complemento: Yup.string()
})

// Esquema de validação para cartão
const CartaoSchema = Yup.object().shape({
  nomeCartao: Yup.string().required('Campo obrigatório'),
  numeroCartao: Yup.string()
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido')
    .required('Campo obrigatório'),
  cvv: Yup.string()
    .matches(/^\d{3}$/, 'CVV inválido')
    .required('Campo obrigatório'),
  mesVencimento: Yup.string()
    .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
    .required('Campo obrigatório'),
  anoVencimento: Yup.string()
    .matches(/^\d{4}$/, 'Ano inválido')
    .required('Campo obrigatório')
})

const formatCep = (value: string) => {
  if (!value) return value
  const cep = value.replace(/[^\d]/g, '')
  if (cep.length <= 5) return cep
  return `${cep.slice(0, 5)}-${cep.slice(5, 8)}`
}

const formatCardNumber = (value: string) => {
  if (!value) return value
  const cardNumber = value.replace(/[^\d]/g, '')
  return cardNumber.match(/.{1,4}/g)?.join(' ') || cardNumber
}

const formatCvv = (value: string) => {
  if (!value) return value
  return value.slice(0, 3)
}

const formatMonth = (value: string) => {
  if (!value) return value
  return value.slice(0, 2)
}

const formatYear = (value: string) => {
  if (!value) return value
  return value.slice(0, 4)
}

const Checkout = () => {
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { precoTotal, hash, isOpenProdutos } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = (isValid: boolean) => {
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1)
    }
  }

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1)
  }
  return (
    <CheckoutContainer className={isOpenProdutos ? 'is-open' : ''}>
      <Overlay />
      <Formik
        initialValues={{
          quemRecebe: '',
          endereco: '',
          cidade: '',
          cep: '',
          numero: '',
          complemento: '',
          nomeCartao: '',
          numeroCartao: '',
          cvv: '',
          mesVencimento: '',
          anoVencimento: ''
        }}
        validationSchema={currentStep === 1 ? EnderecoSchema : CartaoSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async (data) => {
          if (currentStep === 2) {
            const payload: PurchasePayload = {
              products: [
                {
                  id: 1, // Defina um ID fixo ou modifique conforme necessário
                  price: Number(precoTotal.toFixed(2)), // Ajuste o preço conforme necessário
                },
              ],
              delivery: {
                receiver: data.quemRecebe, // Nome do destinatário
                address: {
                  description: data.endereco, // Endereço
                  city: data.cidade, // Cidade
                  zipCode: data.cep, // CEP
                  number: Number(data.numero), // Número da casa (convertido para número)
                  complement: data.complemento || undefined, // Complemento (opcional)
                },
              },
              payment: {
                card: {
                  name: data.nomeCartao, // Nome no cartão
                  number: data.numeroCartao.replace(/\s+/g, ""), // Remove espaços do número do cartão
                  code: Number(data.cvv), // CVV (convertido para número)
                  expires: {
                    month: Number(data.mesVencimento), // Mês de vencimento (convertido para número)
                    year: Number(data.anoVencimento), // Ano de vencimento (convertido para número)
                  },
                },
              },
            };
            try {
              const response = await purchase(payload).unwrap();
              dispatch(gerarHashELimpar(response.orderId))
              handleNextStep(true);
            } catch (err) {
              console.error('Erro na mutação:', err);
            }
            dispatch(zerarPreco())
          }
          else if (currentStep === 3) {
            dispatch(closeProduto()), setCurrentStep(1)
          }
        }}
      >
        {({ isSubmitting, setFieldValue, validateForm }) => (
          <Form>
            {currentStep === 1 && (
              <Card classe="Card_Endereco">
                <h3>Entrega</h3>
                <CardDados>
                  <label htmlFor="quemRecebe">Quem irá receber</label>
                  <Field type="text" name="quemRecebe" />
                  <ErrorMessage name="quemRecebe" component="div" />
                </CardDados>
                <CardDados>
                  <label htmlFor="endereco">Endereço</label>
                  <Field type="text" name="endereco" />
                  <ErrorMessage name="endereco" component="div" />
                </CardDados>
                <CardDados>
                  <label htmlFor="cidade">Cidade</label>
                  <Field type="text" name="cidade" />
                  <ErrorMessage name="cidade" component="div" />
                </CardDados>
                <CardDadosCep>
                  <CardDados>
                    <label htmlFor="cep">CEP</label>
                    <Field
                      type="text"
                      name="cep"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue('cep', formatCep(e.target.value))
                      }
                    />
                    <ErrorMessage name="cep" component="div" />
                  </CardDados>
                  <CardDados>
                    <label htmlFor="numero">Número</label>
                    <Field type="text" name="numero" />
                    <ErrorMessage name="numero" component="div" />
                  </CardDados>
                </CardDadosCep>
                <CardDados>
                  <label htmlFor="complemento">Complemento (opcional)</label>
                  <Field type="text" name="complemento" />
                  <ErrorMessage name="complemento" component="div" />
                </CardDados>
                <ContainerButton>
                  <CardButton
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      validateForm().then((errors) => {
                        if (Object.keys(errors).length === 0) {
                          handleNextStep(true)
                        } else {
                          handleNextStep(false)
                        }
                      })
                    }}
                  >
                    Continuar com pagamento
                  </CardButton>
                  <CardButton
                    type="button"
                    onClick={() => {
                      dispatch(openCart()), dispatch(closeProduto())
                    }}
                  >
                    Voltar para o carrinho
                  </CardButton>
                </ContainerButton>
              </Card>
            )}

            {currentStep === 2 && (
              <Card classe="Card_Cartao">
                <h3>Pagamento - Valor a pagar R$ {precoTotal.toFixed(2)}</h3>
                <CardDados>
                  <label htmlFor="nomeCartao">Nome no cartão</label>
                  <Field type="text" name="nomeCartao" />
                  <ErrorMessage name="nomeCartao" component="div" />
                </CardDados>
                <CarDadosCartao>
                  <CardDados className="numero">
                    <label htmlFor="numeroCartao">Número do cartão</label>
                    <Field
                      type="text"
                      name="numeroCartao"
                      maxLength="19"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue(
                          'numeroCartao',
                          formatCardNumber(e.target.value)
                        )
                      }
                    />
                    <ErrorMessage name="numeroCartao" component="div" />
                  </CardDados>
                  <CardDados className="cvv">
                    <label htmlFor="cvv">CVV</label>
                    <Field
                      type="text"
                      name="cvv"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue('cvv', formatCvv(e.target.value))
                      }
                    />
                    <ErrorMessage name="cvv" component="div" />
                  </CardDados>
                </CarDadosCartao>
                <CarDadosCartao_2>
                  <CardDados className="mes">
                    <label htmlFor="mesVencimento">Mês de vencimento</label>
                    <Field
                      type="text"
                      name="mesVencimento"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue(
                          'mesVencimento',
                          formatMonth(e.target.value)
                        )
                      }
                    />
                    <ErrorMessage name="mesVencimento" component="div" />
                  </CardDados>
                  <CardDados className="ano">
                    <label htmlFor="anoVencimento">Ano de vencimento</label>
                    <Field
                      type="text"
                      name="anoVencimento"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue(
                          'anoVencimento',
                          formatYear(e.target.value)
                        )
                      }
                    />
                    <ErrorMessage name="anoVencimento" component="div" />
                  </CardDados>
                </CarDadosCartao_2>
                <ContainerButton>
                  <CardButton
                    disabled={isSubmitting}
                    type="button" // Alteramos para "button" para controlar manualmente o envio
                    onClick={(e) => {
                      const target = e.target as HTMLElement;
                      validateForm().then((errors) => {
                        if (Object.keys(errors).length === 0) {
                          // Envia o formulário relacionado ao botão
                          const formElement = target.closest('form');
                          if (formElement) {
                            formElement.requestSubmit(); // Envia o formulário manualmente
                          }
                        } else {
                          handleNextStep(false);
                        }
                      });
                    }}
                  >
                    Finalizar pagamento
                  </CardButton>
                  <CardButton type="button" onClick={handlePreviousStep}>
                    Voltar para edição de endereço
                  </CardButton>
                </ContainerButton>
              </Card>
            )}

            {currentStep === 3 && (
              <Card classe="Card_Conclusao">
                <h3>Pedido realizado - {hash}</h3>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                  <br />
                  <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                  <br />
                  <br />
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                  <br />
                  <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <ContainerButton>
                  <CardButton type="submit">
                    Concluir
                  </CardButton>
                </ContainerButton>
              </Card>
            )}
          </Form>
        )}
      </Formik>
    </CheckoutContainer>
  )
}

export default Checkout
