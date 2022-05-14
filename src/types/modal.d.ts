export interface IModal {
  isShowing: boolean
  hide: (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => void
  addFavoriteList: (e: React.MouseEvent<HTMLButtonElement>) => void
}
