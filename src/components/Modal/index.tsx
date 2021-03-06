import styles from './modal.module.scss'
import { IModal } from '../../types/modal.d'

// eslint-disable-next-line react/prop-types
const Modal: React.FC<IModal> = ({ isShowing, hide, addFavoriteList, modalType, deleteFavoriteList }) => {
  if (isShowing) {
    document.body.style.setProperty('overflow', 'hidden')
    return (
      <div className={styles.blackOutStyle}>
        <div className={styles.container}>
          <div className={styles.buttonWrapper}>
            {modalType === 'add' ? (
              <button type='button' onClick={addFavoriteList}>
                즐겨찾기
              </button>
            ) : (
              <button type='button' onClick={deleteFavoriteList}>
                즐겨찾기 해제
              </button>
            )}

            <button type='button' onClick={hide}>
              취소
            </button>
          </div>
        </div>
      </div>
    )
  }
  document.body.style.setProperty('overflow', 'scroll')
  return null
}

export default Modal
