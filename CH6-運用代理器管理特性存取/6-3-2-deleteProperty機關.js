const cat = { fullBall: true }
cat.fullBall = undefined
console.log('fullBall' in cat)
// <- true，undefined 僅將原特性清除，特性仍為物件的一部分
delete cat.fullBall
console.log('fullBall' in cat)
// <- false，特性會完全從物件中消除


const target = { _secret: 'foo' }
const handler = {
  has (target, key) {
    if (key.startsWith('_')) {
      return false
    }

    return Reflect.has(target, key)
  }
}
// 私有特性應無法變更，也無法存取及確認是否存在
const proxy = new Proxy(target, handler)
console.log('_secret' in proxy)
// <- false
console.log('_secret' in target)
// <- true
// 但 delete 運算子仍可以完全將私有特性移除
delete proxy._secret
console.log('_secret' in target)
// <- false

const handler = {
  get (target, key) {
    invariant(key, 'get')
    return Reflect.get(target, key)
  },
  set (target, key) {
    invariant(key, 'set')
    return Reflect.set(target, key)
  },
  deleteProperty (target, key) {
    invariant(key, 'delete')
    return Reflect.deleteProperty(target, key)
  }
}


function invariant (key, action) {
  if (key.startsWith('_')) {
    throw new Error(`Can't ${action} private "${key}" property`)
  }
}

const target = { _secret: 'foo' }
const proxy = new Proxy(target, handler)
console.log('_secret' in proxy)
// <- true
// 使用 handler.deleteProperty 阻止 delete 操作，不再有私有特性被刪除的風險
delete proxy._secret
// <- Error: Can't delete private "_secret" property
