// EPSILON: 浮點數運算安全的誤差範圍
Number.EPSILON
// <- 2.220446049250313e-16
Number.EPSILON.toFixed(20)
// <- '0.00000000000000022204'


// 浮點數運算
0.1 + 0.2
// <- 0.30000000000000004
0.1 + 0.2 === 0.3
// <- false

// 取得誤差
0.1 + 0.2 - 0.3
// <- 5.551115123125783e-17
5.551115123125783e-17.toFixed(20)
// <- '0.00000000000000005551'

// 確認誤差是否小到可以忽略
5.551115123125783e-17 < Number.EPSILON
// <- true


// 判斷浮點數的運算結果是否落在預期的誤差範圍中
function withinMarginOfError (left, right) {
  // 使用 Math.abs 就不用考慮兩數的先後順序
  return Math.abs(left - right) < Number.EPSILON
}

withinMarginOfError(0.1 + 0.2, 0.3)
// <- true
withinMarginOfError(0.2 + 0.2, 0.3)
// <- false
