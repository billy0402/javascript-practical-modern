function join (...list) {
  return list.join(', ')
}

join('first', 'second', 'third')

// <- first, second, third


// 已命名參數不會包含在其餘參數中
function join (separator, ...list) {
  return list.join(separator)
}

join('; ', 'first', 'second', 'third')
// <- first; second; third


// 在箭頭函式中使用其餘參數，必須加上小括號，即使只有一個參數 (or SyntaxError)
var sumAll = (...numbers) => numbers.reduce(
  (total, next) => total + next
)
console.log(sumAll(1, 2, 5))
// <- 8


// ES5
function sumAll () {
  var numbers = Array.prototype.slice.call(arguments)
  return numbers.reduce(function (total, next) {
    return total + next
  })
}

console.log(sumAll(1, 2, 5))
// <- 8
