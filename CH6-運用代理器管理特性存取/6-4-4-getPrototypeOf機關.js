/*
使用 handler.getPrototypeOf 機關操作的方法:
- Object#__proto__ 特性
- Object#isPrototypeOf 方法
- Object.getPrototypeOf 方法
- Reflect.getPrototypeOf 方法
- instanceof 運算子
 */

const target = {}
const handler = {
  // 假裝是 Array 陣列
  getPrototypeOf: target => Array.prototype
}
const proxy = new Proxy(target, handler)
console.log(proxy instanceof Array)
// <- true
console.log(proxy.push)
// <- undefined，並不是真的 Array


const target = {}
const handler = {
  getPrototypeOf: target => Array.prototype,
  get (target, key) {
    return (
      Reflect.get(target, key) || // 從物件中搜尋特性
      Reflect.get(Array.prototype, key) // 從 Array 中搜尋特性
    )
  }
}
const proxy = new Proxy(target, handler)
// proxy.push 指向 Array#push 方法
console.log(proxy.push)
// <- [Function: push]
// 以操作物件的方式達成陣列的效果
proxy.push('first', 'second')
console.log(proxy)
// <- { '0': 'first', '1': 'second', length: 2 }
