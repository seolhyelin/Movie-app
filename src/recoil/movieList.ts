import { atom } from 'recoil'

import { IMovie } from 'types/search'

export const favoriteState = atom<IMovie[]>({
  key: 'favoriteState',
  default: [],
})

export const movieListState = atom<IMovie[]>({
  key: 'movieListState',
  default: [],
})
