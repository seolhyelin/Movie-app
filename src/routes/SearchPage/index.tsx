/* eslint-disable no-promise-executor-return */
import { useState, useRef, useEffect } from 'react'
import styles from './searchPage.module.scss'

import { FaSearch } from 'react-icons/fa'

import { getSearchApi } from 'services/search'
import { IMovie } from 'types/search.d'

import Loader from 'components/Loader'

const SearchPage: React.FC = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([])

  const [keyword, setKeyword] = useState<string>('')
  const [page, setPage] = useState<number>(1)

  const [isLoaded, setIsLoaded] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value
    setKeyword(target)
  }
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const params = {
      s: keyword,
      page,
    }
    const {
      data: { Search },
    } = await getSearchApi(params)
    setMovieList(Search)
  }

  const getMoreItem = async () => {
    setIsLoaded(true)
    await new Promise((reslove) => setTimeout(reslove, 1500))
    const newPage = page + 1

    const params = {
      s: keyword,
      page: newPage,
    }

    const {
      data: { Search },
    } = await getSearchApi(params)

    const newMovieList = movieList.concat(Search)
    setMovieList(newMovieList)
    setPage(newPage)

    setIsLoaded(false)
  }

  const onIntersect = async ([entry]: any, observer: any) => {
    if (entry.isInteresecting && !isLoaded) {
      observer.unobserve(entry.target)
      await getMoreItem()
      observer.observe(entry.target)
    }
  }

  useEffect(() => {
    let observer
    if (targetRef.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      })

      observer.observe(targetRef.current)
    }
  }, [isLoaded])

  return (
    <div className={styles.container}>
      <section className={styles.searchWrapper}>
        <input className={styles.searchInput} placeholder='검색어를 입력하세요' onChange={handleInputChange} />
        <button className={styles.searchButton} type='button' onClick={handleClick}>
          <FaSearch />
        </button>
      </section>
      <section className={styles.resultWrapper}>
        {movieList.length === 0 ? (
          <div>검색 결과가 없습니다.</div>
        ) : (
          <>
            <ul>
              {movieList?.map((movie) => {
                return (
                  <li key={movie.imdbID}>
                    <section className={styles.movieList}>
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
            <div ref={targetRef} className={styles.targetElement}>
              {isLoaded && <Loader />}
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default SearchPage
