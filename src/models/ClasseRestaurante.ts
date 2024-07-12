class ClasseRestaurante {
  id: number
  image: string
  titulo: string
  detalhes: string
  pontuacao?: number
  infos?: string[]
  categoria?: string
  constructor(
    id: number,
    image: string,
    titulo: string,
    detalhes: string,
    pontuacao: number,
    infos: string[],
    categoria?: string
  ) {
    this.id = id
    this.image = image
    this.titulo = titulo
    this.detalhes = detalhes
    this.pontuacao = pontuacao
    this.infos = infos
    this.categoria = categoria
  }
}
export default ClasseRestaurante
