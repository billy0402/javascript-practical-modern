// Number.isNaN: value 是 NaN 才回傳 true
Number.isNaN(123)
// <- false，整數不是 NaN
Number.isNaN(Infinity)
// <- false，Infinity 不是 NaN
Number.isNaN('a hundred')
// <- false，字串不是 NaN
Number.isNaN(NaN)
// <- true，NaN 是 NaN
Number.isNaN('a hundred' / 'two')
// <- true，字串相除是 NaN


// 全域的 isNaN:  value 不是數值就回傳 true
isNaN('a hundred')
// <- true，Number('a hundred) 是 NaN
isNaN(new Date())
// <- false
// Number(new Date()) 使用 Date#valueOf，回傳 unix timestamp 數值


// Number.isNaN 比全域的 isNaN 正確，不會進行資料轉換
// 判定是數值且不是 NaN
function isNumber (value) {
  return typeof value === 'number' && !Number.isNaN(value)
}

isNumber(1)
// <- true
isNumber(Infinity)
// <- true
isNumber(NaN)
// <- false
isNumber('two')
// <- false
isNumber(new Date())
// <- false
