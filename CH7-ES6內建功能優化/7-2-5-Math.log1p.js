// Math.log1p: value 加 1 後取自然對數 1n(value + 1)
// 反向函式為 Ｍath.expm1
// 實作 Math.log1p
function log1p (value) {
  return Math.log(value + 1)
}

// Math.log1p 比 log1p 精準度更高
log1p(1.00000000005e-10)
// <- 1.000000082690371e-10
Math.log1p(1.00000000005e-10)
// <- 1e-10，的確是 Math.expm1(1e-10) 的反向計算結果
