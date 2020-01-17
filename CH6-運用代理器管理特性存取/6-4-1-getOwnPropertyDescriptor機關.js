const handler = {
  getOwnPropertyDescriptor (target, key) {
    invariant(key, 'get property descriptor for')
    return Reflect.getOwnPropertyDescriptor(target, key)
  }
}

function invariant (key, action) {
  if (key.startsWith('_')) {
    throw new Error(`Can't ${action} private "${key}" property`)
  }
}

const target = {}
const proxy = new Proxy(target, handler)
Reflect.getOwnPropertyDescriptor(proxy, '_secret')
// <- Error: Can't get property descriptor for private "_secret" property
// 缺點(除錯考量):   會通知外部使用者存取特殊前置字元的特性是不被允許的
// 解決(安全性考量): 應直接回傳 undefined ，將特性隱藏起來


const handler = {
  getOwnPropertyDescriptor (target, key) {
    if (key.startsWith('_')) {
      return
    }

    return Reflect.getOwnPropertyDescriptor(target, key)
  }
}
const target = {
  _secret: 'sauce',
  topping: 'mozzarella'
}
const proxy = new Proxy(target, handler)
console.log(Object.getOwnPropertyDescriptor(proxy, 'dressing'))
// <- undefined，不存在的特性
console.log(Object.getOwnPropertyDescriptor(proxy, '_secret'))
// <- undefined，私有特性
console.log(Object.getOwnPropertyDescriptor(proxy, 'topping'))
// {
//   value: 'mozzarella',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// 公開特性，回傳特性描述子

// getOwnPropertyDescriptor 能夠攔截 Object#hasOwnProperty
// 仰賴特性描述子來判指定特性是否存在
console.log(proxy.hasOwnProperty('topping'))
// <- true
console.log(proxy.hasOwnProperty('_secret'))
// <- false
