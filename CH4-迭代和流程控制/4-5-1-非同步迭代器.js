// 同步迭代器
const sequence = {
  [Symbol.iterator] () {
    const items = ['i', 't', 'e', 'r', 'a', 'b', 'l', 'e']

    return {
      next: () => ({
        done: items.length === 0,
        value: items.shift()
      })
    }
  }
}

function printSequence () {
  for (const i of sequence) {
    console.log(i)
  }
}

printSequence()


// 非同步迭代器
const asyncSequence = {
  [Symbol.asyncIterator] () {
    const items = ['i', 't', 'e', 'r', 'a', 'b', 'l', 'e']

    return {
      next: () => Promise
        .resolve({
          done: items.length === 0,
          value: items.shift()
        })
    }
  }
}

async function printAsyncSequence () {
  for await (const i of asyncSequence) {
    console.log(i)
  }
}

printAsyncSequence()


// 無限序列在指定時間內增加值
const interval = duration => ({
  [Symbol.asyncIterator]: () => ({
    i: 0,
    next () {
      return new Promise(resolve =>
        setTimeout(() => resolve({
          value: this.i++,
          done: false
        }), duration)
      )
    }
  })
})

async function printInterval () {
  for await (const i of interval(1000)) {
    console.log(`${i} seconds elapsed.`)
  }
}

printInterval()
