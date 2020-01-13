// 實作無限費氏數列產生器
function * fibonacci () {
  let previous = 0
  let current = 1

  while (true) {
    yield current
    const next = previous + current
    previous = current
    current = next
  }
}

const g = fibonacci()
for (let i = 0; i < 8; i++) {
  console.log(g.next())
  // <- { value: 1, done: false }
  // <- { value: 1, done: false }
  // <- { value: 2, done: false }
  // <- { value: 3, done: false }
  // <- { value: 5, done: false }
  // <- { value: 8, done: false }
  // <- { value: 13, done: false }
  // <- { value: 21, done: false }
}


// 實作實作無限費氏數列可迭代物件
const fibonacci = {
  [Symbol.iterator] () {
    let previous = 0
    let current = 1
    return {
      next () {
        const value = current
        const next = previous + current
        previous = current
        current = next
        return {
          value,
          done: false
        }
      }
    }
  }
}
const sequence = fibonacci[Symbol.iterator]()
for (let i = 0; i < 8; i++) {
  console.log(sequence.next())
  // <- { value: 1, done: false }
  // <- { value: 1, done: false }
  // <- { value: 2, done: false }
  // <- { value: 3, done: false }
  // <- { value: 5, done: false }
  // <- { value: 8, done: false }
  // <- { value: 13, done: false }
  // <- { value: 21, done: false }
}


// 可迭代物件使用產生器函式定義迭代行為
const fibonacci = {
  * [Symbol.iterator] () {
    let previous = 0
    let current = 1

    while (true) {
      yield current
      const next = previous + current
      previous = current
      current = next
    }
  }
}
const g = fibonacci[Symbol.iterator]()
for (let i = 0; i < 8; i++) {
  console.log(g.next())
  // <- { value: 1, done: false }
  // <- { value: 1, done: false }
  // <- { value: 2, done: false }
  // <- { value: 3, done: false }
  // <- { value: 5, done: false }
  // <- { value: 8, done: false }
  // <- { value: 13, done: false }
  // <- { value: 21, done: false }
}
// 利用可迭代協議尋訪，不手動建立產生器物件
for (const value of fibonacci) {
  console.log(value)

  // 迴圈中斷器，避免無限迴圈
  if (value > 20) {
    break
  }
}
// <- 1
// <- 1
// <- 2
// <- 3
// <- 5
// <- 8
// <- 13
// <- 21
