import React, { useState } from 'react'

import { useRecoilValue, useRecoilState } from 'recoil'
import { movieListState, favoriteState } from 'recoil/movieList'
import { IMovie } from 'types/search'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  const movieList = useRecoilValue(movieListState)
  const [favoriteMovieList, setFavoriteMovieList] = useRecoilState(favoriteState)
  const [currentMovieTitle, setCurrentMovieTitle] = useState('')
  const [modalType, setModalType] = useState('add')

  const handleModalVisible = (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    const movieTitle = (e.currentTarget as HTMLLIElement).dataset.title
    if (movieTitle) {
      setCurrentMovieTitle(movieTitle)
      checkFavoriteList(movieTitle) ? setModalType('delete') : setModalType('add')
    }
    setIsShowing(!isShowing)
  }

  const addFavoriteList = () => {
    const currentSelectedMovie = movieList.find((movie) => movie.Title === currentMovieTitle) as IMovie
    const updateFavoriteMovieList = favoriteMovieList.concat(currentSelectedMovie)
    setFavoriteMovieList(updateFavoriteMovieList)
    setIsShowing(!isShowing)

    const local = JSON.parse(localStorage.getItem('favoriteMovieList') as string)
    if (!local) localStorage.setItem('favoriteMovieList', JSON.stringify(updateFavoriteMovieList))
    else {
      const newLocal = local.concat(currentSelectedMovie)
      localStorage.setItem('favoriteMovieList', JSON.stringify(newLocal))
    }
  }

  const deleteFavoriteList = () => {
    // const after = movieList.filter((el) => el.Title !== currentMovieTitle)
    // console.log(after)
    // console.log(favoriteMovieList)
    // setFavoriteMovieList(after)
    // localStorage.setItem('favoriteMovieList', after)
  }

  const checkFavoriteList = (movieTitle: string) => {
    const local = JSON.parse(localStorage.getItem('favoriteMovieList') as string)
    // local이 없으면 화면이 뜨지 않음
    if (!local) return false
    const isCheck = local.find((movie: IMovie) => movie.Title === movieTitle)
    return isCheck
  }

  return { isShowing, handleModalVisible, addFavoriteList, deleteFavoriteList, modalType, checkFavoriteList }
}
export default useModal
