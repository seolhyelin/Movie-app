/* eslint-disable react/prop-types */
/* eslint-disable no-promise-executor-return */
import { useState, useRef, useEffect, MouseEventHandler } from 'react'
import styles from './searchPage.module.scss'

import { FaSearch } from 'react-icons/fa'

import { getSearchApi } from 'services/search'
import { IMovie } from 'types/search.d'

import Loader from 'components/Loader'

import { useRecoilState } from 'recoil'
import { movieListState, favoriteState } from 'recoil/movieList'

interface SearchPageProps {
  handleModalVisible: (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => void
}

const SearchPage: React.FC<SearchPageProps> = ({ handleModalVisible }) => {
  const [movieList, setMovieList] = useRecoilState(movieListState)
  const [a, b] = useRecoilState(favoriteState)

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
    if (Search) setMovieList(Search)
  }

  // const getMoreItem = async () => {
  //   setIsLoaded(true)

  //   await new Promise((reslove) => setTimeout(reslove, 1500))
  //   const newPage = page + 1

  //   const params = {
  //     s: keyword,
  //     page: newPage,
  //   }

  //   const {
  //     data: { Search },
  //   } = await getSearchApi(params)

  //   if (Search) {
  //     const newMovieList = movieList.concat(Search)
  //     setMovieList(newMovieList)
  //     setPage(newPage)
  //   }

  //   setIsLoaded(false)
  // }

  // const onIntersect = async ([entry]: any, observer: any) => {
  //   if (entry.isIntersecting && !isLoaded) {
  //     observer.unobserve(entry.target)
  //     await getMoreItem()
  //     observer.observe(entry.target)
  //   }
  // }

  // useEffect(() => {
  //   let observer: IntersectionObserver
  //   if (targetRef.current) {
  //     observer = new IntersectionObserver(onIntersect, {
  //       threshold: 0.4,
  //     })
  //     observer.observe(targetRef.current)
  //   }
  // }, [isLoaded])
  console.log(a)
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
          <div className={styles.noResult}>검색 결과가 없습니다.</div>
        ) : (
          <ul className={styles.movies}>
            {movieList?.map((movie) => {
              return (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li key={movie.imdbID} data-title={movie.Title} onClick={handleModalVisible}>
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
        )}
        {/* <div ref={targetRef} className={styles.targetElement}>
          {isLoaded && <Loader />}
        </div> */}
      </section>
    </div>
  )
}

export default SearchPage
