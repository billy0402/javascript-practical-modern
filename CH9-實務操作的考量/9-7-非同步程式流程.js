// 利用事件來處理非同步工作相當複雜，一半以上用在定義程式流程
const EventEmitter = require('events').EventEmitter
const tracker = new EventEmitter()
tracker.on('started', multiply)
tracker.on('multiplied', print)
start(256, 512, 1024)

function start (...input) {
  const sum = input.reduce((a, b) => a + b, 0)
  tracker.emit('started', {
    sum,
    input
  })
}

function multiply ({ sum, input }) {
  const message = `The sum of ${input.join(' + ')} is ${sum}`
  tracker.emit('multiplied', message)
}

function print (message) {
  console.log(message)
  // <- The sum of 256 + 512 + 1024 is 1792
}


// 無限序列的迭代器
const integers = value => ({
  value,
  [Symbol.iterator] () {
    return { // 不會回傳 { done: true }，所以是無限的
      next: () => ({
        value: this.value++
      })
    }
  }
})

// 無限序列的產生器，本身就可迭代，簡短易讀
function * integers (value = 0) {
  while (true) { // while true 肯定是無限迴圈
    yield value++
  }
}


// 同步 Promise 的回呼地獄 (callback hell)
Promise
  .resolve(2)
  .then(x => x * 2)
  .then(x => x * 2)
  .then(x => x * 2)

// 非同步 Promise
// 流程透過 await Promise.all(tasks) 控制
async function calculate () {
  let x = 2
  x = await x * 2
  x = await x * 2
  x = await x * 2

  return x
}
