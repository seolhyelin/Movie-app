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
      apikey: '92e32667',
      s: params.s,
      page: params.page,
    },
  })
