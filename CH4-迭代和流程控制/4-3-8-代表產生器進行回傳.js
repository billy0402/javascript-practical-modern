function * numbers () {
  yield 1
  yield 2
  yield 3
}

const g = numbers()
console.log(g.next())
// <- { value: 1, done: false }
// 結束產生器物件對序列的巡訪
console.log(g.return())
// <- { value: undefined, done: true }
console.log(g.next())
// <- { value: undefined, done: true }


// 利用 try...finally 避免產出序列立即結束
function * numbers () {
  try {
    yield 1
  } finally {
    yield 2
    yield 3
  }
  yield 4
  yield 5
}

const g = numbers()
console.log(g.next())
// <- { value: 1, done: false }
console.log(g.return(-1))
// <- { value: 2, done: false }
console.log(g.next())
// <- { value: 3, done: false }
console.log(g.next())
// <- { value: -1, done: true }


function * numbers () {
  yield 1
  yield 2
  // 迴圈中斷器，非序列最末端，盡量避免使用
  return 3 // 回傳 { done: true }
  yield 4
}

console.log([...numbers()])
// <- [ 1, 2 ]
console.log(Array.from(numbers()))
// <- [ 1, 2 ]
for (const number of numbers()) {
  console.log(number)
  // <- 1
  // <- 2
}

const g = numbers()
for (let i = 0; i < 4; i++) {
  console.log(g.next())
  // <- { value: 1, done: false }
  // <- { value: 2, done: false }
  // <- { value: 3, done: true }，取得產生器回傳值
  // <- { value: undefined, done: true }
}
