import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import { useEffect } from 'react'

const Rotas = () => {
  const { pathname } = useLocation()
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Perfil />} />
    </Routes>
  )
}

export default Rotas
