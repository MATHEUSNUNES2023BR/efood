type Props = {
  classe: string
  children: React.ReactNode
}
const Card = ({ children, classe }: Props) => (
  <div className={classe}>{children}</div>
)
export default Card
