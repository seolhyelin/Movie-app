/* eslint-disable react/prop-types */
/* eslint-disable no-promise-executor-return */
import { useState, useRef, useEffect } from 'react'
import styles from './searchPage.module.scss'

import { FaSearch } from 'react-icons/fa'
import { BsFillStarFill } from 'react-icons/bs'

import { getSearchApi } from 'services/search'
import Loader from 'components/Loader'

import { useRecoilState, useResetRecoilState } from 'recoil'
import { movieListState } from 'recoil/movieList'
import { IMovie } from 'types/search'

interface SearchPageProps {
  handleModalVisible: (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => void
}

const SearchPage: React.FC<SearchPageProps> = ({ handleModalVisible }) => {
  const [movieList, setMovieList] = useRecoilState(movieListState)
  const movieResetList = useResetRecoilState(movieListState)

  const [keyword, setKeyword] = useState<string>('')
  const [page, setPage] = useState<number>(1)

  const [isLoaded, setIsLoaded] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  const markFavorite = (movieTitle: string) => {
    const local = JSON.parse(localStorage.getItem('favoriteMovieList') as string)
    if (!local) return false
    const isCheck = local.find((movie: IMovie) => movie.Title === movieTitle)
    return isCheck
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value
    setKeyword(target)
  }

  const handleClick = async () => {
    movieResetList()

    const params = {
      s: keyword,
      page,
    }
    const {
      data: { Search },
    } = await getSearchApi(params)
    if (Search) setMovieList(Search)
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

    if (Search) {
      const newMovieList = movieList.concat(Search)
      setMovieList(newMovieList)
      setPage(newPage)
    }

    setIsLoaded(false)
  }

  const onIntersect = async ([entry]: any, observer: any) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target)
      await getMoreItem()
    }
  }

  useEffect(() => {
    let observer: IntersectionObserver

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
      <section className={`${styles.resultWrapper} ${movieList.length === 0 && styles.noResultWrapper}`}>
        {movieList.length === 0 ? (
          <div className={styles.noResult}>검색 결과가 없습니다.</div>
        ) : (
          <ul className={styles.movies}>
            {movieList?.map((movie) => {
              return (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li
                  key={`${movie.imdbID}-${movie.Title}`}
                  data-title={movie.Title}
                  onClick={handleModalVisible}
                  className={styles.resultList}
                >
                  <section className={styles.movieItem}>
                    <img alt={movie.Title} width='110px' height='140px' src={`${movie.Poster}`} />
                    <article>
                      <p className={styles.movieTitle}>{movie.Title}</p>
                      <p>{movie.Year}</p>
                      <p>{movie.Type}</p>
                    </article>
                    {markFavorite(movie.Title) && <BsFillStarFill className={styles.favoriteIcon} />}
                  </section>
                </li>
              )
            })}
          </ul>
        )}
        <div ref={targetRef} className={styles.targetElement}>
          {isLoaded && <Loader />}
        </div>
      </section>
    </div>
  )
}

export default SearchPage
