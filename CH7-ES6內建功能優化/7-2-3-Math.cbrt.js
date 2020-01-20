// Math.cbrt (cubic root): 立方根
// Math.sqrt (square root): 平方根
Math.cbrt(-1) // <- -1
Math.cbrt(3) // <- 1.4422495703074083
Math.cbrt(8) // <- 2
Math.cbrt(27) // <- 3


// Math.cbrt 會自動轉型
Math.cbrt('8') // <- 2，Number('8') 是 8
Math.cbrt('one') // <- NaN，Number('one') 是 NaN
