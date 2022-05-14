import styles from './routes.module.scss'
import Footer from '../components/Footer/index'
// import Search from './SearchPage/index'
// import Modal from '../components/Modal/index'
// import useModal from 'hooks/useModal'
import FavoritePage from './FavoritePage/index'

const App = () => {
  // const { isShowing, handleModalVisible, addFavoriteList } = useModal()

  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        {/* <Search handleModalVisible={handleModalVisible} /> */}
        <FavoritePage />
        <Footer />

        {/* {isShowing && <Modal isShowing={isShowing} hide={handleModalVisible} addFavoriteList={addFavoriteList} />} */}
      </div>
    </div>
  )
}

export default App
