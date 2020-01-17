/*
使用 in 運算子時，可以使用 handler.has 方法將特性隱藏起來
1. 不作用: key in proxy 於 Reflect.has(target, key) 會失敗，因為它與 key in target 的作用相同
2. 回傳 true 或 false: 不論 key 是否存在於 target 中
3. 拋出錯誤: 以告知 in 運算是不合法的，最終手段
 */
const handler = {
  get (target, key) {
    invariant(key, 'get')
    return Reflect.get(target, key)
  },
  set (target, key, value) {
    invariant(key, 'set')
    return Reflect.set(target, key, value)
  },
  has (target, key) {
    if (key.startsWith('_')) {
      // 私有屬性都顯示該屬性不存在
      return false
    }

    return Reflect.has(target, key)
  }
}

function invariant (key, action) {
  if (key.startsWith('_')) {
    throw new Error(`Can't ${action} private "${key}" property`)
  }
}

const target = {
  _secret: 'securely-stored-value',
  wellKnown: 'publicly-known-value'
}
const proxy = new Proxy(target, handler)
console.log('wellKnown' in proxy)
// <- true
console.log('_secret' in proxy)
// <- false，使用者代理物件
console.log('_secret' in target)
// <- true，底層目標物件
console.log(proxy.hasOwnProperty('_secret'))
// <- true，Object#hasOwnProperty 不會通過 has 機關，應避免使用
