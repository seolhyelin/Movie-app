import React, { useState } from 'react'

import { useRecoilValue, useRecoilState } from 'recoil'
import { movieListState, favoriteState } from 'recoil/movieList'
import { IMovie } from 'types/search'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  const movieList = useRecoilValue(movieListState)
  const [favoriteMovieList, setFavoriteMovieList] = useRecoilState(favoriteState)
  const [currentMovieTitle, setCurrentMovieTitle] = useState('')

  const addFavoriteList = () => {
    const currentSelectedMovie = movieList.find((movie) => movie.Title === currentMovieTitle) as IMovie
    const updateFavoriteMovieList = favoriteMovieList.concat(currentSelectedMovie)
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
