import { memo } from 'react'
import styles from './loader.module.scss'
import ReactLoading from 'react-loading'

const Loader = () => {
  return (
    <div className={styles.container}>
      <ReactLoading type='spin' color='#ffa61c' />
    </div>
  )
}

export default memo(Loader)
