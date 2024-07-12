class ClasseRestaurante {
  id: number
  image: string
  titulo: string
  detalhes: string
  pontuacao: number
  infos: string[]
  constructor(
    id: number,
    image: string,
    titulo: string,
    detalhes: string,
    pontuacao: number,
    infos: string[]
  ) {
    this.id = id
    this.image = image
    this.titulo = titulo
    this.detalhes = detalhes
    this.pontuacao = pontuacao
    this.infos = infos
  }
}
export default ClasseRestaurante
