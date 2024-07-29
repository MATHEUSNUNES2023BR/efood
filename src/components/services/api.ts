import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Estrutura } from '../../pages/Home'
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getBaseUrl: builder.query<Estrutura[], void>({
      query: () => ''
    })
  })
})

export const { useGetBaseUrlQuery } = api
export default api
