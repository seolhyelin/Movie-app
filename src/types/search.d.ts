interface ISearch {
  Search: [
    {
      title: String
      year: String
      imdbID: String
      type: String
      poster: String
      // Poster: String(URL)
    }
  ]
  totalResults: Int // 검색 결과 전체 개수, 현재까지 받아온 개수와 비교하여 다음 페이지 호출
  response: Bool
}
