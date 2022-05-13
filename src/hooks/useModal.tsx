import React, { useState } from 'react'

function useModal() {
  const [isShowing, setIsShowing] = useState(false)

  const handleModalVisible = () => {
    setIsShowing(!isShowing)
  }
  return { isShowing, handleModalVisible }
}

export default useModal
