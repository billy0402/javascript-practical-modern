/*
Object.defineProperty(target, key, descriptor) 使用情境:
1. 需要確保擷取操作器和設定操作器能夠跨平台支援
2. 想要自訂特性存取器，預設為唯讀，需手動新增可讀寫.刪除.列舉

使用 defineProperty 建立特性後的特性描述子:
value = 特性的初始值
get = undefined，作為該特性擷取器的方法
set = undefined，作為該特性更新值的方法
writable = false，特性為唯獨
enumerable = false，特性會在 for...in迴圈 和 Object.keys 中隱藏
configurable = false，特性不可變更

初始化特性的方式:
1. value + writable (忽略時，預設為 true)
2. value + set/get
 */

const pizza = {}
pizza.topping = 'ham'
Object.defineProperty(pizza, 'extraCheese', { value: true })
console.log(Object.getOwnPropertyDescriptor(pizza, 'topping'))
// {
//   value: 'ham',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
console.log(Object.getOwnPropertyDescriptor(pizza, 'extraCheese'))
// {
//   value: true,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


'use strict'
const target = {}
const handler = {
  // 一般特性宣告 proxy[key] = value. Object.defineProperty(proxy, key, {value} 會通過這個機關
  defineProperty (target, key, descriptor) {
    // 嚴格模式(strict mode) 下設定失敗並拋錯，寬鬆模式(sloppy mode) 下設定失敗不拋錯
    return false
  }
}
const proxy = new Proxy(target, handler)
// proxy.extraCheese = false
// TypeError: 代理器上的 'defineProperty': 機關回傳結果為 false
// Object.defineProperty(proxy, 'extraCheese', { value: false })
// TypeError: 代理器上的 'defineProperty': 機關回傳結果為 false

const handler = {
  defineProperty (target, key, descriptor) {
    invariant(key, 'define')
    return Reflect.defineProperty(target, key, descriptor)
  }
}


function invariant (key, action) {
  // 禁止設定私有特性
  if (key.startsWith('_')) {
    throw new Error(`Can't ${action} private "${key}" property`)
  }
}

const target = {}
const proxy = new Proxy(target, handler)
proxy.topping = 'cheese'
proxy._secretIngredient = 'salsa'
// <- Error: Can't define private "_secretIngredient" property
