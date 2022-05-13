import styles from './routes.module.scss'
import Footer from '../components/Footer/index'
import Search from './SearchPage/index'
import Modal from '../components/Modal/index'
import useModal from 'hooks/useModal'

const App = () => {
  const { isShowing, handleModalVisible } = useModal()

  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        {/* <Search />
        <Footer /> */}
        <button onClick={handleModalVisible} type='button'>
          show
        </button>
        {isShowing && <Modal isShowing={isShowing} hide={handleModalVisible} />}
      </div>
    </div>
  )
}

export default App
