const handler = {
  // 代替設定 __proto__ 特性
  setPrototypeOf (target, proto) {
    // 與 Object.setPrototypeOf(target, proto) 效果相同
    Reflect.setPrototypeOf(target, proto)
  }
}
const base = {}

function Target () {
}

const proxy = new Proxy(Target, handler)
proxy.setPrototypeOf(proxy, base)
console.log(proxy.prototype === base)
// <- true


const handler = {
  setPrototypeOf (target, proto) {
    // 避免使用者更改底層物件原型，拋錯方便使用者除錯
    throw new Error('Changing the prototype is forbidden')
  }
}
const base = {}

function Target () {
}

const proxy = new Proxy(Target, handler)
proxy.setPrototypeOf(proxy, base)
// <- Error: Changing the prototype is forbidden
