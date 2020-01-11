// 大部分情況下，Object.is 與 === 結果相同
const a = 1
const b = 1
console.log(a === b)
// <- true
console.log(Object.is(a, b))
// <- true


console.log(typeof NaN)
// <- 'number'
console.log(NaN === NaN)
// <- false
console.log(Object.is(NaN, NaN))
// <- true

console.log(-0 === +0)
// <- true
console.log(Object.is(-0, +0))
// <- false
