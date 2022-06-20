

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY ,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const createRequest = (url) =>({url, headers:cryptoApiHeaders});
// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com'}),
  mode:'no-cors',
  endpoints: (builder) => ({
    getCoins: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      getCoinDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getCryptoHistory: builder.query({
        // query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
        query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?&timePeriod=${timePeriod}`),
      }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery, useGetCoinDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;