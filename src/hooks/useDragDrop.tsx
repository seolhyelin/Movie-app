// import { useRecoilState } from 'recoil'
// import { favoriteState } from 'recoil/movieList'

// const useDragDrop = () => {
//   const [favoriteList, setfavoriteList] = useRecoilState(favoriteState)
//   // const [grab, setGrab] = useState(null)

//   const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
//     e.preventDefault()
//   }

//   const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
//     // setGrab(e.currentTarget)
//     e.currentTarget.classList.add('grabbing')
//     e.dataTransfer.effectAllowed = 'move'
//     if (e.currentTarget.dataset.position) {
//       const targetPosition = e.currentTarget.dataset.position.toString()
//       e.dataTransfer.setData('text/html', targetPosition)
//     }
//   }

//   const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
//     e.currentTarget.classList.remove('grabbing')
//     e.currentTarget.style.opacity = ''
//     e.dataTransfer.dropEffect = 'move'
//     // setGrab(null)
//   }

//   const handleOnDrop = (e: React.DragEvent<HTMLLIElement>) => {
//     // const grabPosition = Number(grab.dataset.position)
//     const grab = Number(e.dataTransfer.getData('text/html'))
//     const targetPosition = Number(e.currentTarget.dataset.position)
//     const list = [...favoriteList]
//     list[grab] = list.splice(targetPosition, 1, list[grab])[0]
//     setfavoriteList(list)
//     localStorage.setItem('favoriteMovieList', JSON.stringify(list))
//   }

//   return { handleDragStart, handleDragEnd, handleDragOver, handleOnDrop }
// }

// export default useDragDrop
export {}
