import React, { useState } from 'react'

import { useRecoilValue, useRecoilState } from 'recoil'
import { movieListState, favoriteState } from 'recoil/movieList'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  const movieList = useRecoilValue(movieListState)
  const [favoriteMovieList, setFavoriteMovieList] = useRecoilState(favoriteState)
  const [currentMovieTitle, setCurrentMovieTitle] = useState<string>('')

  const addFavoriteList = () => {
    const currentSelectedMovie = movieList.findIndex((movie) => movie.Title === currentMovieTitle)
    const currentSelectedMovieInfo = movieList[currentSelectedMovie]
    const updateFavoriteMovieList = favoriteMovieList.concat(currentSelectedMovieInfo)
    setFavoriteMovieList(updateFavoriteMovieList)
    setIsShowing(!isShowing)
    localStorage.setItem('favoriteMovieList', JSON.stringify(updateFavoriteMovieList))
  }
  const handleModalVisible = (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    const movieTitle = (e.currentTarget as HTMLLIElement).dataset.title
    if (movieTitle) {
      setCurrentMovieTitle(movieTitle)
    }
    setIsShowing(!isShowing)
  }
  return { isShowing, handleModalVisible, addFavoriteList }
}
export default useModal
