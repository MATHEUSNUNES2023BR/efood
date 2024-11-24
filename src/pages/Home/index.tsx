import Hero from '../../components/Hero'
import ListaRestaurante from '../../components/ListaRestaurante'
import Footer from '../../components/Footer'
import { useGetRestaurantsQuery } from '../../components/services/api'

export type Estrutura = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}
const Home = () => {
  const { data } = useGetRestaurantsQuery()
  console.log(data)
  if (data) {
    return (
      <>
        <Hero />
        <ListaRestaurante dadosRestaurante={data!} />
        <Footer />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
