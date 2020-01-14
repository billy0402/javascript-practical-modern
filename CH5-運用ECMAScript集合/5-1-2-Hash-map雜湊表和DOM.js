// (ES5) 關聯 DOM物件 與 API物件
const map = []

function customThing (el) {
  const mapped = findByElement(el)
  if (mapped) {
    return mapped
  }

  const api = {
    // api 方法自訂的內容
  }
  const entry = storeInMap(el, api)
  api.destroy = destroy.bind(null, entry)

  return api
}

function storeInMap (el, api) {
  const entry = {
    el,
    api
  }
  map.push(entry)
  return entry
}

function findByElement (query) {
  for (const { el, api } of map) {
    if (el === query) {
      return api
    }
  }
}

function destroy (entry) {
  const index = map.indexOf(entry)
  map.slice(index, 1)
}


// 改用 Map 關聯 DOM物件 與 API物件
const map = new Map()

function customThing (el) {
  const mapped = findByElement(el)
  if (mapped) {
    return mapped
  }

  const api = {
    // api 方法自訂的內容
    destroy: destroy.bind(null, el)
  }
  storeInMap(el, api)

  return api
}

function storeInMap (el, api) {
  map.set(el, api)
}

function findByElement (el) {
  map.get(el)
}

function destroy (el) {
  map.delete(el)
}
