import ClasseRestaurante from '../../models/ClasseRestaurante'
import ListaProduto from '../../components/ListaProduto'
import pizza from '../../assets/images/pizza.png'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../components/store'
const Produtos: ClasseRestaurante[] = [
  {
    id: 1,
    image: pizza,
    titulo: 'Pizza Marguerita',
    detalhes:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: pizza,
    titulo: 'Pizza Marguerita',
    detalhes:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: pizza,
    titulo: 'Pizza Marguerita',
    detalhes:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: pizza,
    titulo: 'Pizza Marguerita',
    detalhes:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: pizza,
    titulo: 'Pizza Marguerita',
    detalhes:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: pizza,
    titulo: 'Pizza Marguerita',
    detalhes:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]
const Perfil = () => {
  const dados = useSelector(({ headerDados }: RootReducer) => headerDados)
  return (
    <>
      <Header
        nomeRestaurante={dados.nomeRestaurante}
        categoria={dados.categoria}
        imagem={dados.imagem}
      />
      <ListaProduto Produtos={Produtos}></ListaProduto>
    </>
  )
}
export default Perfil
