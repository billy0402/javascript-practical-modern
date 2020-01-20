// Math.sign: 回傳向量 (-1, -0, 0, 1, NaN)，表示值的正負號
Math.sign(-30) // <- -1
Math.sign(-0) // <- -0
Math.sign(0) // <- 0
Math.sign(1) // <- 1
Math.sign(NaN) // <- NaN
Math.sign('one') // <- NaN，Number('one') 是 NaN
Math.sign('0') // <- 0，Number('0') 是 0
Math.sign('7') // <- 1，Number('7') 是 7
// ES6 的 Number 的新方法不會對 value 進行轉換
// Math 的新方法則會使用 Number(value) 轉換
