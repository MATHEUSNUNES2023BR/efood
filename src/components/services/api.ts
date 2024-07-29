import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioDados } from '../ListaProduto'
import { Estrutura } from '../../pages/Home'
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getBaseUrl: builder.query<Estrutura[], void>({
      query: () => ''
    }),
    getItaliana: builder.query<CardapioDados[], void>({
      query: () => '1'
    }),
    getArabe: builder.query<CardapioDados[], void>({
      query: () => '2'
    }),
    getJapones: builder.query<CardapioDados[], void>({
      query: () => '3'
    }),
    getPortugues: builder.query<CardapioDados[], void>({
      query: () => '4'
    }),
    getPizzaria: builder.query<CardapioDados[], void>({
      query: () => '5'
    }),
    getVegano: builder.query<CardapioDados[], void>({
      query: () => '6'
    })
  })
})

export const {
  useGetItalianaQuery,
  useGetArabeQuery,
  useGetJaponesQuery,
  useGetPortuguesQuery,
  useGetPizzariaQuery,
  useGetVeganoQuery,
  useGetBaseUrlQuery
} = api
export default api
