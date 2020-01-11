// 隱性的給箭頭函式命名
var throwError = message => {
  throw new Error(message)
}
throwError('This is a warning');
// <- Uncaught Error: This is a warning


// 利用箭頭函式讓程式看起來更整齊 (函式編程 functional programming 特別有效)
[1, 2, 3, 4]
  .map(value => value * 2) // [2, 4, 6, 8]
  .filter(value => value > 2) // [4, 6, 8]
  .forEach(value => console.log(value))
// <- 4
// <- 6
// <- 8
