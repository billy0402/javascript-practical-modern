// JavaScript 和所有語言可以安全又正確地表示的最大整數 (IEEE-754標準)
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1
// <- true
Number.MAX_SAFE_INTEGER === 9007199254740991
// <- true

// 最小整數 與 最大整數 為相對常數
Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER
// <- true
Number.MIN_SAFE_INTEGER === -9007199254740991
// <- true


// 超出範圍的運算會變得不穩定
1 === 2
// <- false
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2
// <- true
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2
// <- true
