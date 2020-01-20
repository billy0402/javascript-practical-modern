// (CJS) 任何東西都可以輸出
module.exports = 'hello'
module.exports = { hello: 'world' }
module.exports = ['hello', 'world']
module.exports = function hello () {
}


// (ESM) 輸出預設的繫結
// 將 module.exports 取代為 export default
export default 'hello'
export default { hello: 'world' }
export default ['hello', 'world']
export default function hello () {
}


// (CJS) module.exports 可以動態指派
function initialize () {
  module.exports = 'hello'
}

initialize()


// (ESM) export 僅允許頂端置入
function initialize () {
  export default 'hello' // <- SyntaxError
}

initialize()


// (CJS) 命名輸出
module.exports.counter = 0
module.exports.count = () => model.exports.counter++


// (ESM) 命名輸出
export let counter = 0
export const count = () => counter++

// 變數宣告無法單獨拆解出來
let counter = 0
const count = () => counter++
// export counter // <- SyntaxError
// export count // <- SyntaxError

// ESM 犧牲彈性介面，增進靜態分析


// (ESM) 輸出串列
let counter = 0
const count = () => counter++
export { counter, count }

// 別名語法
let counter = 0
const count = () => counter++
export { counter, count as increment }

// 指定預設輸出
let counter = 0
const count = () => counter++
export { counter as default, count as increment }

// 拆解預設輸出
let counter = 0
const count = () => counter++
export default counter
export { count as increment }


// (ESM) 輸出的是繫結，不是值
// fungible.js
export let fungible = { name: 'bound' }
setTimeout(() => fungible = [0, 1, 2], 5000)

// app.js
import { fungible } from './fungible.js'

console.log(fungible) // <- {name: "bound"}
setInterval(() => console.log(fungible), 2000)
// <- {name: "bound"}
// <- {name: "bound"}
// <- [0, 1, 2]
// <- [0, 1, 2]
// <- [0, 1, 2]

// 適用於計數器和旗標，最好避免使用，無法預期 API 介面被改變


// (ESM) 自另一個模組輸出，繫結不會載入本地作用域
export { increment } from './counter.js'
increment()
// ReferenceError: increment 未定義

// 輸出另一個模組給予新名稱
export { increment as add } from './counter.js'
import { add } from './aliased.js'

// 輸出另一個模組所有的命名輸出，不包含預設輸出
export * from './counter.js'

// 輸出另一個模組的預設輸出，需給予別名
export { default as counter } from './counter.js'
