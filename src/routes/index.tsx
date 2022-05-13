import styles from './routes.module.scss'
// import { Routes, Route } from 'react-router-dom'
// import GNB from 'routes/_shared/GNB'
import Footer from '../components/Footer/index'
import Search from './SearchPage/index'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      {/* <GNB /> */}
      <div className={styles.app}>
        {/* <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='todo' element={<TodoList />} />
          <Route path='weather' element={<Weather />}>
            <Route path=':city' element={<Weather />} />
          </Route>
        </Routes> */}
        <Search />
        <Footer />
      </div>
    </div>
  )
}

export default App
