const registry = {}

function set (name, meta) {
  registry[name] = meta
}

function get (name) {
  return registry[name]
}

set('contra', { description: 'Asynchronous flow control' })
set('dragula', { description: 'Drag and drop' })
set('woofmark', { description: 'Markdown and WYSIWYG editor' })

/*
問題:
1. 安全性議題:
當使用者提供的字串鍵如 __proto__. toString 或其他不在 Object.prototype 所允許的字串時，
會使得這類的雜湊表 (Hash-map) 資料結構互動更難以處理
2. 鍵僅限於使用字串，這使得想用 DOM 元件或其他非字串的參考來建立雜揍表顯得相當困難
3. 當使用 for...in 進行迭代時，需仰賴 Object#hasOwnProperty 來確認所指定的特性未被繼承
4. 以 Object.keys(registry).forEach 對串列項目進行迭代也是很繁複冗長的
 */


// (問題一) 利用前置字串解決
const registry = {}

function set (name, meata) {
  registry['pkg:' + name] = meata
}

function get (name) {
  return registry['pkg:' + name]
}


// (問題一) 使用 Object.create(null) 取代空的字串，不會繼承 Object.prototype
const registry = Object.create(null)

function set (name, meta) {
  registry[name] = meta
}

function get (name) {
  return registry[name]
}


const registry = Object.create(null)

// (問題三四) 迭代函式
function list () {
  return Object.keys(registry).map(key => [key, registry[key]])
}


const registry = Object.create(null)
// (問題三四) 實作迭代器協議
registry[Symbol.iterator] = () => {
  const keys = Object.keys(registry)

  return {
    next () {
      const done = keys.length === 0
      const key = keys.shift()
      const value = [key, registry[key]]

      return {
        done,
        value
      }
    }
  }
}
console.log([...registry])
// <- [
// <-   [ 'contra', { description: 'Asynchronous flow control' } ],
// <-   [ 'dragula', { description: 'Drag and drop' } ],
// <-   [ 'woofmark', { description: 'Markdown and WYSIWYG editor' } ]
// <- ]
