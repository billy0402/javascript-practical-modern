// Number.parseInt 與 parseInt 根本一模一樣
console.log(Number.parseInt === parseInt)
// true


// parseInt 會自動推定基數
parseInt('0xF00')
// <- 3840
parseInt('0xF00', 16)
// <- 3840


// 實字表示法 與 基數(radix) 不合時，會停在第一個非數值字元
parseInt('0xF00', 10)
// <- 0
parseInt('5xF00', 10)
// <- 5，舉例說明此處並無任何特別的動作


// ES6 的 parseInt 可以理解 0x，但不能理解 0b 和 0o
parseInt('0b011')
// <- 0
parseInt('0b011', 2)
// <- 0
parseInt('0o110')
// <- 0
parseInt('0o110', 8)
// <- 0

// 先將前置字元去除，並指定基數
parseInt('0b011'.slice(2), 2)
// <- 3
parseInt('0o110'.slice(2), 8)
// <- 72

// 直接改用 Number 函式轉換
Number('0b011')
// <- 3
Number('0o110')
// <- 72
