/* eslint-disable react/prop-types */
import { useMount } from 'react-use'
import { useState } from 'react'
import styles from './favoritePage.module.scss'
import { IMovie } from 'types/search'
import { useRecoilState } from 'recoil'
import { favoriteState } from 'recoil/movieList'

interface FavoritePageProps {
  handleModalVisible: (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => void
}

const FavoritePage: React.FC<FavoritePageProps> = ({ handleModalVisible }) => {
  const [favoriteList, setFavoriteList] = useRecoilState<IMovie[]>(favoriteState)

  useMount(() => {
    const local = JSON.parse(localStorage.getItem('favoriteMovieList') as string)
    setFavoriteList(local)
  })

  return (
    <div className={styles.container}>
      <p className={styles.favoriteTitle}>내 즐겨찾기</p>
      <section className={styles.favoriteWrapper}>
        <ul>
          {favoriteList.map((movie) => {
            return (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                key={movie.imdbID}
                className={styles.movieLists}
                onClick={handleModalVisible}
                data-title={movie.Title}
              >
                <section className={styles.movieItem}>
                  <img alt={movie.Title} width='110px' height='140px' src={`${movie.Poster}`} />
                  <article>
                    <p className={styles.movieTitle}>{movie.Title}</p>
                    <p>{movie.Year}</p>
                    <p>{movie.Type}</p>
                  </article>
                </section>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default FavoritePage
