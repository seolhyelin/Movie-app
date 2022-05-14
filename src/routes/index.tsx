import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'
import Footer from '../components/Footer/index'
import Search from './SearchPage/index'
import Modal from '../components/Modal/index'
import useModal from 'hooks/useModal'
import FavoritePage from './FavoritePage/index'
import logo from '../assets/griplogo.png'

const App = () => {
  const { isShowing, handleModalVisible, addFavoriteList, modalType, deleteFavoriteList } = useModal()

  return (
    <div className={styles.app}>
      <img alt='logo' src={logo} className={styles.logo} />
      <Routes>
        <Route path='/' element={<Search handleModalVisible={handleModalVisible} />} />
        <Route path='favorite' element={<FavoritePage handleModalVisible={handleModalVisible} />} />
      </Routes>
      {isShowing && (
        <Modal
          isShowing={isShowing}
          hide={handleModalVisible}
          addFavoriteList={addFavoriteList}
          deleteFavoriteList={deleteFavoriteList}
          modalType={modalType}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
