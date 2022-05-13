import axios from 'axios'
import { ISearch } from 'types/search.d'

const SEARCH_URL = `http://www.omdbapi.com/`

interface Params {
  s: string
  page: number
}

export const getSearchApi = (params: Params) =>
  axios.get<ISearch>(`${SEARCH_URL}`, {
    params: {
      ...params,
      apikey: process.env.REACT_APP_API_KEY,
      s: params.s,
      page: params.page,
    },
  })
