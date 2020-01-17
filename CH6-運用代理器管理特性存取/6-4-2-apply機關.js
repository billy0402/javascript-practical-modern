const handler = {
  // target: 代理的函式
  // ctx:    this的內文，函式呼叫時會傳遞給 target
  // args:   引數陣列，函式呼叫時會傳遞給 target
  apply (target, ctx, args) {
    return Reflect.apply(target, ctx, args)
  }
}
const target = {}
const proxy = new Proxy(target, handler)
// 會進入 apply 機關
proxy('cats', 'dogs')
proxy([...['cats', 'dogs']])
proxy.call(null, 'cats', 'dogs')
proxy.apply(null, ['cats', 'dogs'])
Reflect.apply(proxy, null, ['cats', 'dogs'])


// 敘述運作都不會變更底層目標 target，可以讓機關在任何需要擴充功能的函式之間重複使用
const twice = {
  apply (target, ctx, args) {
    return Reflect.apply(target, ctx, args) * 2
  }
}

function sum (a, b) {
  return a + b
}

const proxy = new Proxy(sum, twice)
console.log(proxy(1, 2))
// <- 6


const logger = {
  test () {
    return this
  }
}
// 必須對每個函式都繫結至 logger 物件，已讓 this 參考到 logger 物件
logger.test = logger.test.bind(logger)

const selfish = {
  get (target, key) {
    const value = Reflect.get(target, key)
    if (typeof value !== 'function') {
      return value
    }

    // 回傳函式時自動繫結至 target 物件
    return value.bind(target)
  }
}
const proxy = new Proxy(logger, selfish)
const something = {}
console.log(logger.test() === logger)
// <- true
console.log(logger.test.call(something) === something)
// <- false，透過 .call，this 改變
console.log(proxy.test() === logger)
// <- true
console.log(proxy.test.call(something) === logger)
// <- true，透過 proxy，this 不受影響
console.log(proxy.test() !== proxy.test)
// <- true，value.bind(target) 回傳全新建立的被繫結函式，不是原來的函式


// 工廠函式 (factory function)
function selfish (target) {
  // 被繫結函式的快取暫存
  const cache = new WeakMap()
  const handler = {
    get (target, key) {
      const value = Reflect.get(target, key)
      if (typeof value !== 'function') {
        return value
      }

      // 被繫結函式只能建立一次
      if (!cache.has(value)) {
        // 使用 Reflect.apply 取代 .bind，需要再增加一層抽象層 (第二個代理器)
        cache.set(value, value.bind(target))
      }

      return cache.get(value)
    }
  }

  return new Proxy(target, handler)
}

const logger = {
  test () {
    return this
  }
}
const something = {}
const selfishLogger = selfish(logger)
console.log(selfishLogger.test === selfishLogger.test)
// <- true
console.log(selfishLogger.test() === logger)
// <- true
console.log(selfishLogger.test.call(something) === logger)
// <- true
// 方法繫結至父物件，代理器最方便且較無問題，但瀏覽器支援度尚不完整，且 Proxy 實作上的效能非常差
