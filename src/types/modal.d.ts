export interface IModal {
  isShowing: boolean
  hide: (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => void
}
