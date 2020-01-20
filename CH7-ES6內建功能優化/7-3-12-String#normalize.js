// 表面上看起來相同的字串，背後的編碼點卻不同
'mañana' === 'mañana'
// <- false，左: ñ，右: n +  ̃

console.log([...'mañana'].map(cp => cp.codePointAt(0).toString(16)))
// <- ['6d', '61', 'f1', '61', '6e', '61']
console.log([...'mañana'].map(cp => cp.codePointAt(0).toString(16)))
// <- ['6d', '61', '6e', '303', '61', '6e', '61']

console.log([...'mañana'].length)
// <- 6
console.log([...'mañana'].length)
// <- 7


// 利用 String#normalize 正規化右側成左側
const normalized = 'mañana'.normalize()
console.log([...normalized].map(cp => cp.codePointAt(0).toString(16)))
// <- ['6d', '61', 'f1', '61', '6e', '61']
console.log(normalized.length)
// <- 6


// 比對字串是否相等時，需將兩個字串都正規劃
function compare (left, right) {
  return left.normalize() === right.normalize()
}

const normal = 'mañana'
const irregular = 'mañana'
normal === irregular
// <- false
compare(normal, irregular)
// <- true
