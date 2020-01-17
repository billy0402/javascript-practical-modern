const target = {
  [Symbol('id')]: 'ba3dfcc0',
  _secret: 'sauce',
  _toppingCount: 3,
  toppings: ['cheese', 'tomato', 'bacon']
}
const handler = {
  ownKeys (target) {
    // 回傳物件的所有特性: 可列舉. 不可列舉. 符號
    return Reflect.ownKeys(target)
  }
}
const proxy = new Proxy(target, handler)
for (const key of Object.keys(proxy)) {
  console.log(key)
  // <- '_secret'
  // <- '_toppingCount'
  // <- 'toppings'
}

/*
可使用 ownKeys 攔截器 (interceptor) 的操作:
Reflect.ownKeys(): 回傳物件中的所有鍵
Object.getOwnPropertyNames(): 回傳非符號的特性
Object.getOwnPropertySymbols(): 回傳符號的特性
Object.keys(): 回傳非符號可列舉的特性
for...in 回傳非符號可列舉的特性
 */


const target = {
  [Symbol('id')]: 'ba3dfcc0',
  _secret: 'sauce',
  _toppingCount: 3,
  toppings: ['cheese', 'tomato', 'bacon']
}
const handler = {
  ownKeys (target) {
    // 回傳公開且無特定前置字元的特性 (含符號)
    return Reflect.ownKeys(target).filter(key => {
      if (typeof key === 'string') {
        return !key.startsWith('_')
      }

      return true
    })
  }
}
const proxy = new Proxy(target, handler)
// Object.keys 會把符號過濾掉
for (const key of Object.keys(proxy)) {
  console.log(key)
  // <- 'toppings'
}
// 符號迭代器不會受到 handler 影響
// 因為 Symbol 鍵類型為 'symbol'，filter 函式會回傳 true
for (const key of Object.getOwnPropertySymbols(proxy)) {
  console.log(key)
  // <- Symbol(id)
}
