import ReactDOM from 'react-dom'
import styles from './modal.module.scss'
import { IModal } from '../../types/modal.d'

const Modal: React.FC<IModal> = ({ isShowing, hide }) => {
  if (isShowing) {
    document.body.style.setProperty('overflow', 'hidden')
    return ReactDOM.createPortal(
      <div className={styles.blackOutStyle}>
        <div className={styles.container}>
          <div className={styles.buttonWrapper}>
            <button type='button'>즐겨찾기</button>
            <button type='button' onClick={hide}>
              취소
            </button>
          </div>
        </div>
      </div>,
      document.body
    )
  }
  document.body.style.setProperty('overflow', 'scroll')
  return null
}

export default Modal
