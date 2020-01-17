const target = {}
const handler = {}
// 可廢止 (revocable) 的代理器
const { proxy, revoke } = Proxy.revocable(target, handler)
proxy.isUsable = true
console.log(proxy.isUsable)
// <- true
// 執行後，proxy 便會對任何操作都拋出錯誤
revoke()
revoke()
revoke()
console.log(proxy.isUsable)
// <- TypeError: 企圖於廢止的代理器執行一個不合法的操作


const proxies = new WeakMap()
const storage = {}

// 取得提供給使用者操作 Proxy 的權限
function getStorage () {
  const handler = {}
  const { proxy, revoke } = Proxy.revocable(storage, handler)

  proxies.set(proxy, { revoke })

  return proxy
}

// 完全取消已提供給使用者操作 Proxy 的權限，一旦切斷就無法恢復
function revokeStorage (proxy) {
  proxies.get(proxy).revoke()
  proxies.delete(proxy)
}

/*
若 revoke函式 與 handler機關 所定義的有效範圍相同，可以建立一些不可寬容的規則。
例如: 若使用者企圖存取一個私有的特性超過一次，就完全取消他的 proxy 存取權
 */
