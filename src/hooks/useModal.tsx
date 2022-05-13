import React, { useState } from 'react'

import { useRecoilValue, useRecoilState } from 'recoil'
import { movieListState, favoriteState } from 'recoil/movieList'

function useModal() {
  const [isShowing, setIsShowing] = useState(false)
  const movieList = useRecoilValue(movieListState)
  const [favoriteMovieList, setFavoriteMovieList] = useRecoilState(favoriteState)

  const handleModalVisible = (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    const movieTitle = (e.currentTarget as HTMLLIElement).dataset.title

    if (movieTitle) {
      const currentSelectedMovie = movieList.findIndex((movie) => movie.Title === movieTitle)

      const currentSelectedMovieInfo = movieList[currentSelectedMovie]

      const updateFavoriteMovieList = favoriteMovieList.concat(currentSelectedMovieInfo)
      setFavoriteMovieList(updateFavoriteMovieList)
    }

    setIsShowing(!isShowing)
  }
  return { isShowing, handleModalVisible }
}
export default useModal
