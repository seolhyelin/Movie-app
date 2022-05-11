import { useMount } from 'react-use'
import styles from './searchPage.module.scss'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  useMount(() => {})
  return (
    <div className={styles.container}>
      <section className={styles.searchWrapper}>
        <input className={styles.searchInput} placeholder='검색어를 입력하세요' />
        <button className={styles.searchButton} type='button'>
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

export default Search
