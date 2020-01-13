// 產聖器物件同時遵守 可迭代協議 和 迭代器協議
function * abc () {
  yield 'a'
  yield 'b'
  yield 'c'
}

const chars = abc()
typeof chars[Symbol.iterator] === 'function'
// <- true，產生器物件是可迭代物件，具有 Symbol.iterator 方法
typeof chars.next === 'function'
// <- true，產生器物件也是迭代器，具有 .next 方法
chars[Symbol.iterator]() === chars
// <- true，產生器物件的迭代器就是自己
console.log(Array.from(chars))
// <- [ 'a', 'b', 'c' ]
console.log([...chars])
// <- [ 'a', 'b', 'c' ]
for (const char of chars) {
  console.log(char)
  // <- 'a'
  // <- 'b'
  // <- 'c'
}


// yield 回傳它的值並暫停產生器函式執行
function * numbers () {
  yield 1
  console.log('a')
  yield 2
  console.log('b')
  yield 3
  console.log('c')
}

// 解構時會產生器會全部執行完
console.log([...numbers()])
// <- a
// <- b
// <- c
// <- [ 1, 2, 3 ]

for (const number of numbers()) {
  console.log(number)
  // <- 1 回傳值，暫停
  // <- a
  // <- 2 回傳值，暫停
  // <- b
  // <- 3 回傳值，暫停
  // <- c 發現序列已結束
}


function * salute () {
  // 直接委派任何可迭代物件
  yield * 'hello'
}

console.log([...salute()])
// console.log([...'hello'])
// <- [ 'h', 'e', 'l', 'l', 'o' ]


function * salute (name) {
  yield * 'hello'
  yield * name
}

console.log([...salute('you')])
// <- ['h', 'e', 'l', 'l', 'o', 'y', 'o', 'u']


const salute = {
  [Symbol.iterator] () {
    const items = ['h', 'e', 'l', 'l', 'o']
    return {
      next: () => ({
        done: items.length === 0,
        value: items.shift()
      })
    }
  }
}

function * multiplied (base, multiplier) {
  yield base + 1 * multiplier
  yield base + 2 * multiplier
}

// 將 yield 與 yield* 結合
// 以使用產生器函式、可迭代物件 和 展開運算子描述一個序列中的資料
function * trailMix () {
  yield * salute
  yield 0
  yield * [1, 2]
  yield * [...multiplied(3, 2)]
  yield [...multiplied(6, 3)]
  yield * multiplied(15, 5)
}

console.log([...trailMix()])
// <- ['h', 'e', 'l', 'l', 'o', 0, 1, 2, 5, 7, [9, 12], 20, 25]
