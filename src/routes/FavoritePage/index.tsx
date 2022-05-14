/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import styles from './favoritePage.module.scss'
import { IMovie } from 'types/search'
import { useMount } from 'react-use'

interface FavoritePageProps {
  handleModalVisible: (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => void
}

const FavoritePage: React.FC<FavoritePageProps> = ({ handleModalVisible }) => {
  const [favoriteList, setFavoriteList] = useState<IMovie[]>([])

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
              <li key={movie.imdbID} className={styles.movieLists} onClick={handleModalVisible}>
                <section className={styles.movieItem}>
                  <img alt={movie.Title} width='100px' height='120px' src={`${movie.Poster}`} />
                  <article>
                    <p>{movie.Title}</p>
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
