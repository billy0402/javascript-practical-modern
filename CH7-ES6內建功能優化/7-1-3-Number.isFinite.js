// isFinite: 會將值透過 Number(value) 進行轉換
// 再判定是否不屬於 Infinity. -Infinity. NaN 其中之一
isFinite(Infinity)
// <- false
isFinite(-Infinity)
// <- false
isFinite(NaN)
// <- false
isFinite(null)
// <- true
isFinite(-13)
// <- true
isFinite('10')
// <- true


// Number.isFinite: 不會自行轉換
// 如果需要可採用 Number.isFinite(Number(value))
Number.isFinite(Infinity)
// <- false
Number.isFinite(-Infinity)
// <- false
Number.isFinite(NaN)
// <- false
Number.isFinite(null)
// <- false，null 不是一個數值
Number.isFinite(-13)
// <- true
Number.isFinite('10')
// <- false，字串不是一個數值


// 向下相容 Number.isFinite
function numberIsFinite (value) {
  return typeof value === 'number' && isFinite(value)
}
