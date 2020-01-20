// Math.expm1: 計算 e 的 value 次方後再減 1
// 實作 Math.expm1
function expm1 (value) {
  return Math.pow(Math.E, value) - 1
}

function expm1 (value) {
  // 與 return Math.E ** value - 1 相同
  return Math.exp(value) - 1
}

// Math.expm1 比 expm1 的精準度更高
expm1(1e-20)
// <- 0
Math.expm1(1e-20)
// <- 1e-20
expm1(1e-10)
// <- 1.000000082740371e-10
Math.expm1(1e-10)
// <- 1.00000000005e-10
