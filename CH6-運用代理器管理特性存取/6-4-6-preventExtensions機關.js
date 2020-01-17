'use strict'
const canExtend = new WeakSet()
const handler = {
  preventExtensions (target) {
    // WeakSet 以外的物件禁止擴充
    if (!canExtend.has(target)) {
      Object.preventExtensions(target)
    }

    return Reflect.preventExtensions(target)
  }
}

const target = {}
const proxy = new Proxy(target, handler)
canExtend.add(target)
Object.preventExtensions(proxy)
// <- TypeError: 'preventExtensions' 於 proxy: 機關回傳錯誤

canExtend.delete(target)
Object.preventExtensions(proxy)
console.log(Object.isExtensible(proxy))
// <- false，禁止擴充
