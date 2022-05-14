import styles from './footer.module.scss'
import { BsFillStarFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.searchWrapper}>
        <FaSearch className={styles.searchIcon} />
        <button className={styles.searchButton} type='button'>
          <Link to='/' className={styles.link}>
            Search
          </Link>
        </button>
      </section>
      <section className={styles.bookmarkWrapper}>
        <BsFillStarFill className={styles.bookmarkIcon} />
        <button className={styles.bookmarkButton} type='button'>
          <Link to='/favorite' className={styles.link}>
            Favorites
          </Link>
        </button>
      </section>
    </footer>
  )
}

export default Footer
