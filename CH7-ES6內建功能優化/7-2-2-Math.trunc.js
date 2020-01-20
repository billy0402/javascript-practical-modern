// Math.trunc: 無條件捨去小數，會使用 Number(value) 轉換
Math.trunc(12.34567) // <- 12
Math.trunc(-13.58) // <- -13
Math.trunc(-0.1234) // <- -0
Math.trunc(NaN) // <- NaN
Math.trunc('one') // <- NaN，Number('one') 是 NaN
Math.trunc('123.456') // <- 123，Number('123.456') 是 123.456


// 向下相容 Math.trunc，大於 0 使用無條件捨去，小於 0 使用無條件進位
function mathTrunc (value) {
  return value > 0 ? Math.floor(value) : Math.ceil(value)
}
