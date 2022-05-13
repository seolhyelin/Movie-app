import styles from './footer.module.scss'
import { BsFillStarFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.searchWrapper}>
        <FaSearch className={styles.searchIcon} />
        <button className={styles.searchButton} type='button'>
          Search
        </button>
      </section>
      <section className={styles.bookmarkWrapper}>
        <BsFillStarFill className={styles.bookmarkIcon} />
        <button className={styles.bookmarkButton} type='button'>
          Favorites
        </button>
      </section>
    </footer>
  )
}

export default Footer
