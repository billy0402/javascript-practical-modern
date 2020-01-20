// Number.isInteger: value 是有限數值且不含浮點數
console.log(Number.isInteger(Infinity)) // <- false
console.log(Number.isInteger(-Infinity)) // <- false
console.log(Number.isInteger(NaN)) // <- false
console.log(Number.isInteger(null)) // <- false
console.log(Number.isInteger(0)) // <- true
console.log(Number.isInteger(-10)) // <- true
console.log(Number.isInteger(10.3)) // <- false


// 向下相容 (ponyfill) Number.isInteger
function numberIsInteger (value) {
  // 如果 value 能夠整除 1，代表是整數
  return Number.isFinite(value) && value % 1 === 0
}
