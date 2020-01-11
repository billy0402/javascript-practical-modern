// 運用符號將 DOM 元件 對應至 API 物件
const cache = Symbol('calendar')

function createCalendar (el) {
  if (cache in el) { // 符號是否存在於元件中
    return el[cache] // 使用 cache 避免重新初始化
  }

  const api = el[cache] = {
    // 日曆 API 的內容
  }

  return api
}


// 透過符號定義協議
const character = {
  name: 'Thor',
  // toJSON: () => ({
  //   key: 'value'
  // })
  toJSON: true
}
console.log(JSON.stringify(character))
// <- {"key":"value"} (是函式)
// <- {"name":"Thor","toJSON":true} (不是函式)


// toJSON 改用 Symbol 實作，避免被序列化
const json = Symbol('alternative to toJSON')
const character = {
  name: 'Thor',
  // 使用 Symbol 優點: 不會影響公開 API.不用擔心名稱衝突
  [json]: () => ({
    key: 'value'
  })
}

// Symbol 將定義 stringify 函式的運作方式
function stringify (target) {
  if (json in target) {
    return JSON.stringify(target[json]())
  }

  return JSON.stringify(target)
}

console.log(stringify(character))
// <- {"key":"value"}

// 將符號提供給函式使用
stringify.as = json
