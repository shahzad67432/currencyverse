import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoHeaders = {
    'x-rapidapi-key': 'f97fe92b3amsh5b22f32bd9c596cp1db694jsna96129f19085',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/'
const createRequest = (url)=>( {url, headers: cryptoHeaders} )

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`coins?limit=${count}`)
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`coin/${coinId}`)
        }),
        getcoinHistory: builder.query({
            query: ({coinId, timeperiod}) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`)
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptosDetailsQuery,
    useGetcoinHistoryQuery,
} = cryptoApi