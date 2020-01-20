// counter.js
let counter = 0
const increment = () => counter++
const decrement = () => counter--
export { counter as default, increment, decrement }

// (ESM) 執行輸入模組的頂層程式碼，但不會繫結至變數
// import 僅允許頂端置入，簡化模組載入機制. 協助靜態分析
import './counter.js'


// (CJS) 載入預設的輸出
const counter = require('./counter.js')


// (ESM) 載入預設的輸出
import counter from './counter.js'

console.log(counter)
// <- 0


// (ESM) 載入命名的輸出
import { increment } from './counter.js'

// 載入多個繫結
import { increment, decrement } from './counter.js'

// 賦予別名，解構函式以冒號分隔，import. export 以 as 分隔
import { increment as add } from './counter.js'

// 將 預設輸入 與 命名輸入 結合
import counter, { increment } from './counter.js'

// 明確地給予預設輸入別名
import { default as counter, increment } from './counter.js'


// ESM (繫結) 與 CJS (參考) 不同
import counter, { increment } from './counter.js'

console.log(counter) // <- 0
increment()
console.log(counter) // <- 1
increment()
console.log(counter) // <- 2


// (ESM) 萬用字元載入敘述，必須給予別名
// 載入模組的命名空間，包含命名輸出和預設輸出
import * as counter from './counter.js'

counter.increment()
counter.increment()
console.log(counter.default) // <- 2
