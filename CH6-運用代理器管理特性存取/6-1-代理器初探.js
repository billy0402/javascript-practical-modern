// 不管理的代理器 (Proxy)，控制物件與外界互動的方式
const target = {}
const handler = {}
const proxy = new Proxy(target, handler)
proxy.exposed = true
console.log(target.exposed)
// <- true
console.log(proxy.somethingElse)
// <- undefined
