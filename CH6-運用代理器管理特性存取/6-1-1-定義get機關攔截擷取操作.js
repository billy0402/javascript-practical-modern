const target = {}
const handler = {
  get (target, key) {
    console.log(`Get on property ${key}`)
    return target[key]
  }
}
// proxy 透過 handler.get 先將值轉換再回傳值
const proxy = new Proxy(target, handler)
proxy.numbers = [1, 1, 2, 3, 5, 8, 13]
console.log(proxy.numbers)
// <- 'Get on property numbers'
// <- [1, 1, 2, 3, 5, 8, 13]
console.log(proxy['somethingElse'])
// <- 'Get on property somethingElse'
// <- undefined


const target = {}
const handler = {
  get (target, key) {
    // 檢查特性名稱是否允許擷取
    if (key.startsWith('_')) {
      throw new Error(`Property "${key}" is inaccessible.`)
    }

    console.log(`Get on property ${key}`)
    // Proxy 代理器所設定的每個 機關(trap) 都有對應的 反射(Reflect) API
    // 使用 Reflect.get 取代手動擷取 target 物件的 key 特性
    return Reflect.get(target, key)
  }
}
const proxy = new Proxy(target, handler)
console.log(proxy._secret)
// <- Error: Property "_secret" is inaccessible.
