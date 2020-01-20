// Math.hypot: 計算每個輸入值的平方和再開根號的值
Math.hypot(1, 2, 3)
// <- 3.741657386773941 = Math.sqrt(1 * 1 + 2 * 2 + 3 * 3)


// 向下相容 Math.hypot
function mathHypot (...values) {
  const accumulateSquares = (total, value) => total + value * value
  const squares = values.reduce(accumulateSquares, 0)

  return Math.sqrt(squares)
}

// mathHypot 比原生函式更精準
Math.hypot(1, 2, 3)
// <- 3.741657386773941
mathHypot(1, 2, 3)
// <- 3.7416573867739413
