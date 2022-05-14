import { useEffect, useState } from 'react'
import styles from './favoritePage.module.scss'
import { IMovie } from 'types/search'
import { useMount } from 'react-use'

const FavoritePage = () => {
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
              <li key={movie.imdbID} className={styles.movieLists}>
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
