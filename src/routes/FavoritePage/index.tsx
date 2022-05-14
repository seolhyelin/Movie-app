import styles from './favoritePage.module.scss'

const FavoritePage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.favoriteTitle}>내 즐겨찾기</p>
      <section className={styles.favoriteWrapper}>
        <ul>
          <li>헤헤</li>
        </ul>
      </section>
    </div>
  )
}

export default FavoritePage
