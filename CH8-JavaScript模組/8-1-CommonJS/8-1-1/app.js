// .js 或 .json 可以忽略，但不建議
const union = require('./union.js')
console.log(union([1, 2], 3))
// <- [1, 2, 3]
console.log(union([1, 2], 2))
// <- [1, 2]
