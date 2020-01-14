// 不允許原生資料型態的值，類似 WeakMap
const set = new WeakSet()
// set.add('a')
// <- TypeError
// set.add(Symbol())
// <- TypeError


// WeakSet 本身無法迭代
// 但可以將迭代器傳入建構子進行初始化
const set = new WeakSet([
  new Date(),
  {},
  () => {
  },
  [1]
])


const cars = new WeakSet()

class Car {
  // 每個 car 物件都是 cars 中的資料項
  constructor () {
    cars.add(this)
  }

  // 確保提供的方法只能被 car 物件呼叫
  fuelUp () {
    if (!cars.has(this)) {
      throw new TypeError('Car#fuelUp called on a non-Car!')
    }
  }
}


const circle = {
  x: 20,
  y: 5,
  r: 15
}
circle.self = circle
listOwnProperties({
  circle,
  numbers: [1, 5, 7],
  sum: (a, b) => a + b
})
// <- circle.x: 20
// <- circle.y: 5
// <- circle.r: 15
// <- circle.self: [circular]
// <- numbers.0: 1
// <- numbers.1: 5
// <- numbers.2: 7
// <- sum: (a, b) => a + b

// 將指定的物件遞迴地進行迭代，以將樹的每項特性輸出
function listOwnProperties (input) {
  recurse(input)

  // 使用 WeakSet 而不是 Set，因為不需要用到 Set 的特徵功能
  function recurse (source, lastPrefix, seen = new WeakSet()) {
    Object.keys(source).forEach(printOrRecurse)

    function printOrRecurse (key) {
      const value = source[key]
      const prefix = lastPrefix ? `${lastPrefix}.${key}` : key
      const shouldRecurse = isObject(value) || Array.isArray(value)

      if (shouldRecurse) {
        if (!seen.has(value)) {
          seen.add(value)
          recurse(value, prefix, seen)
        } else {
          console.log(`${prefix}: [circular]`)
        }
      } else {
        console.log(`${prefix}: ${value}`)
      }
    }
  }
}

function isObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}


// 建構並維持一個 DOM 元件串列
const elements = new WeakSet()

function dummy (target) {
  // DOM 函式庫只處理第一次呼叫的 DOM 元件
  if (elements.has(target)) {
    return
  }
  elements.add(target)
  // 進行一些操作
}
