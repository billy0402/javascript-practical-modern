// 沒有 done 的無限序列
const random = {
  // 回傳迭代器物件
  [Symbol.iterator]: () => ({
    // 回傳亂數
    next: () => ({ value: Math.random() })
  })
}


// 會進入無限迴圈
// const r = [...random]
// Array.from(random)


// 透過解構賦值擷取無限序列
const [one, anther] = random
console.log(one)
// <- 0.14669250190322525
console.log(anther)
// <- 0.88371780986458860

// 透過 for...of 巡訪無限序列
for (const value of random) {
  if (value > 0.8) {
    break
  }
  console.log(value)
}


// 取得固定個數的亂數序列
function take (sequence, amount) {
  return {
    [Symbol.iterator] () {
      const iterator = sequence[Symbol.iterator]()
      return {
        next () {
          if (amount-- < 1) {
            return { done: true }
          }
          return iterator.next()
        }
      }
    }
  }
}

const r = [...take(random, 2)]
// <- [ 0.1759555827646202, 0.4791374998690421 ]


// 取得隨機個數的範圍內序列
function range (sequence, low = 0, high = 1) {
  return {
    [Symbol.iterator] () {
      const iterator = sequence[Symbol.iterator]()
      return {
        next () {
          const item = iterator.next()
          if (item.value < low || item.value > high) {
            return { done: true }
          }
          return item
        }
      }
    }
  }
}

const low = [...range(random, 0, 0.8)]
// <- [ 0.7208643461753192, 0.1126041545754688, 0.2172067853457511 ]
