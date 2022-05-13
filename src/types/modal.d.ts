export interface IModal {
  isShowing: boolean
  hide: (e: MouseEventHandler<HTMLButtonElement>) => void
}
