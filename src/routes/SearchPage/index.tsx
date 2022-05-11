import { useState } from 'react'
import styles from './searchPage.module.scss'

import { FaSearch } from 'react-icons/fa'

import { getSearchApi } from 'services/search'
import { IMovie } from 'types/search.d'

const SearchPage: React.FC = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([])

  const [keyword, setKeyword] = useState<string>('')
  const [page, setPage] = useState<number>(1)

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

  console.log(movieList)

  return (
    <div className={styles.container}>
      <section className={styles.searchWrapper}>
        <input className={styles.searchInput} placeholder='검색어를 입력하세요' onChange={handleInputChange} />
        <button className={styles.searchButton} type='button' onClick={handleClick}>
          <FaSearch />
        </button>
      </section>
      <section className={styles.resultWrapper}>
        <ul className={styles.resultList}>
          <li>스파이더맨</li>
        </ul>
      </section>
    </div>
  )
}

export default SearchPage
