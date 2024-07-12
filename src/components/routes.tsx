import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import { useEffect } from 'react'

const Rotas = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Perfil />} />
    </Routes>
  )
}

export default Rotas
