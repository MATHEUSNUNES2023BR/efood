import ClasseRestaurante from '../../../models/ClasseRestaurante'
import japones from '../../../assets/images/hioki_sushi.png'
import italiano from '../../../assets/images/dolce_vitta.png'
import mexican from '../../../assets/images/mexican.jpeg'
import thai from '../../../assets/images/thai_menu.jpeg'
import frances from '../../../assets/images/fances.jpeg'
import alemao from '../../../assets/images/german.jpeg'
import ListaRestaurante from '../../ListaRestaurante'
const restaurantes: ClasseRestaurante[] = [
  {
    id: 1,
    image: japones,
    titulo: 'Hioki Sushi',
    detalhes:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Japones', 'Destaque da Semana'],
    pontuacao: 4.9
  },
  {
    id: 2,
    image: italiano,
    titulo: 'La Dolce Vita Trattoria',
    detalhes:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    pontuacao: 4.2
  },
  {
    id: 3,
    image: mexican,
    titulo: 'TexMex Cantina',
    detalhes:
      'Descubra a fusão autêntica de sabores do México e Texas. Cada prato é uma explosão de tradições e temperos frescos. TexMex Cantina: onde a paixão pelo sabor é nossa especialidade.',
    infos: ['Japones', 'Destaque da Semana'],
    pontuacao: 4.7
  },
  {
    id: 4,
    image: frances,
    titulo: 'Bistro Francês',
    detalhes:
      'Desfrute da elegância da culinária francesa em um ambiente sofisticado. Cada refeição celebra sabor, arte e paixão gastronômica. Bistro Francês: onde cada mordida é um deleite para os sentidos.',
    infos: ['Japones', 'Destaque da Semana'],
    pontuacao: 4.1
  },
  {
    id: 5,
    image: thai,
    titulo: 'Taste of Thailand',
    detalhes:
      'Embarque em uma viagem aos aromas exóticos e sabores vibrantes da Tailândia. Nossos pratos autênticos trazem a magia da culinária tailandesa. Taste of Thailand: uma explosão de sabores em cada prato',
    infos: ['Japones', 'Destaque da Semana'],
    pontuacao: 4.3
  },
  {
    id: 6,
    image: alemao,
    titulo: 'Alemanha Gourmet',
    detalhes:
      'Experimente o melhor da culinária alemã em um ambiente autêntico. Pratos tradicionais combinam sabores robustos e autênticos. Alemanha Gourmet: onde a tradição encontra o sabor em cada refeição.',
    infos: ['Japones', 'Destaque da Semana'],
    pontuacao: 4.8
  }
]

const Home = () => <ListaRestaurante restaurantes={restaurantes} />

export default Home
