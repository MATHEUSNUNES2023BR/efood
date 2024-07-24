import { createSelector } from 'reselect'
import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import { useEffect } from 'react'
import { fetchDados } from './store/reducers/consumoApi'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootReducer } from './store'

// Selector para dados brutos
const dadosSelector = (state: RootReducer) => state.apiDados

// Selector memoizado para dados derivados
const derivedDataSelector = createSelector([dadosSelector], (apiDados) => {
  return apiDados.map((item) => ({
    ...item
  }))
})

const Rotas = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch<AppDispatch>()
  const { id } = useParams()

  // Usando o selector memoizado
  const dados = useSelector(derivedDataSelector)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (dados.length === 0) {
      dispatch(fetchDados())
    }
  }, [dispatch, dados.length, dados, id])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos/:id" element={<Perfil />} />
    </Routes>
  )
}

export default Rotas
