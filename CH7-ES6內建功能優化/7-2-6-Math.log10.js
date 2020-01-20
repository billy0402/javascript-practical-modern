// Math.log10: 數值取底數為 10 的對數
Math.log10(1000)
// <- 3

// 向下相容 Math.log10
function mathLog10 (value) {
  return Math.log(value) / Math.LN10
}
