// 包含一個不必要的跳脫符號
// 未使用 u 模式
console.log(/\a/.test('ab'))
// <- true

// 使用 u 模式
// console.log(/\a/u.test('ab'))
// <- SyntaxError: 無效的跳脫字元: /\a/


// emoji 以萬國碼表示法
// 未使用 u 模式，會將 '\' 視為不必要的跳脫符號
console.log(/\u{1F40E}/.test('🐎'))
// <- false
console.log(/\u{1F40E}/.test('u{1F40E}'))
// <- true

// 使用 u 模式，會將 '\' 視為萬國碼的跳脫符號
console.log(/\u{1F40E}/u.test('🐎'))
// <- true


// 句點模板可以比對所有在 BMP 平面上的符號，除了行結束符號之外
// 未使用 u 模式
const rDot = /^.$/
console.log(rDot.test('a')) // <- true
console.log(rDot.test('\n')) // <- false，行結束符號無法滿足比對
console.log(rDot.test('\u{1d11e}')) // <- false，星狀符號無法滿足比對

// 使用 u 模式，Unicode 符號也能滿足比對
const rDot = /^.$/u
console.log(rDot.test('a')) // <- true
console.log(rDot.test('\n')) // <- false，行結束符號無法滿足比對
console.log(rDot.test('\u{1d11e}')) // <- true

/*
萬國碼模式 (u) 可以搭配 大小寫無關模式 (i) 執行 Unicode 大小寫折疊 (code folding)，
將輸入字串和正規表示式的編碼點進行正規化
 */
