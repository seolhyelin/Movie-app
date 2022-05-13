export interface IMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface ISearch extends IMovie {
  Search: IMovie[]
  totalResults: Int // 검색 결과 전체 개수, 현재까지 받아온 개수와 비교하여 다음 페이지 호출
  Response: Bool
}
