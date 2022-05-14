import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'
import Footer from '../components/Footer/index'
import Search from './SearchPage/index'
import Modal from '../components/Modal/index'
import useModal from 'hooks/useModal'
import FavoritePage from './FavoritePage/index'

const App = () => {
  const { isShowing, handleModalVisible, addFavoriteList } = useModal()

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Search handleModalVisible={handleModalVisible} />} />
        <Route path='favorite' element={<FavoritePage handleModalVisible={handleModalVisible} />} />
      </Routes>
      {isShowing && <Modal isShowing={isShowing} hide={handleModalVisible} addFavoriteList={addFavoriteList} />}
      <Footer />
    </div>
  )
}

export default App
