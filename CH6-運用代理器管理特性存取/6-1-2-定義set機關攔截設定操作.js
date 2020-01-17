const target = {}
const handler = {
  get (target, key) {
    invariant(key, 'get')
    return Reflect.get(target, key)
  },
  set (target, key, value) {
    invariant(key, 'set')
    // 回傳是否設定成功，嚴格模式下會回傳 TypeError
    return Reflect.set(target, key, value)
  }
}

function invariant (key, action) {
  // 禁止對開頭為底線的特性進行 擷取(get) 與 設定(set)
  if (key.startsWith('_')) {
    throw new Error(`Can't ${action} private "${key}"}`)
  }
}

const proxy = new Proxy(target, handler)
proxy.text = 'the great black pony ate your lunch'
console.log(proxy.text)
// <- the great black pony ate your lunch
// console.log(proxy._secret)
// <- Error: Can't get private "_secret"}
// console.log(proxy._secret = 'invariant')
// <- Error: Can't set private "_secret"}


function proxied () {
  // 將代理的物件包在函式裡
  const target = {}
  const handler = {
    get (target, key) {
      invariant(key, 'get')
      return Reflect.get(target, key)
    },
    set (target, key, value) {
      invariant(key, 'set')
      return Reflect.set(target, key, value)
    }
  }
  // 讓函式回傳 proxy 物件
  return new Proxy(target, handler)
}

function invariant (key, action) {
  if (key.startsWith('_')) {
    throw new Error(`Can't ${action} private "${key}"}`)
  }
}


// 管理公開 API，不允許操作具有前綴字的特性
function concealWithPrefix (original, prefix = '-') {
  const handler = {
    get (original, key) {
      invariant(key, 'get')
      return Reflect.get(original, key)
    },
    set (original, key, value) {
      invariant(key, 'set')
      return Reflect.set(original, key, value)
    }
  }
  return new Proxy(original, handler)

  function invariant (key, action) {
    if (key.startsWith('_')) {
      throw new Error(`Can't ${action} private "${key}"}`)
    }
  }
}

const target = {
  _secret: 'secret',
  text: 'everyone-can-read-this'
}
// 提供 proxy 給使用者操作
const proxy = concealWithPrefix(target)
