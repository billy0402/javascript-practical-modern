// 透過 Symbol.for(key) 取得符號
// 存在   -> 回傳該符號
// 不存在 -> 新建符號，並回傳
const example = Symbol.for('example')
console.log(example === Symbol.for('example'))
// <- true


// 運用 Symbol.keyFor(symbol) 擷取符號鍵
// 存在   -> 回傳全域符號註冊表的對應 key 符號鍵
// 不存在 -> 回傳 undefined
const example = Symbol.for('example')
console.log(Symbol.keyFor(example))
// <- 'example'
console.log(Symbol.keyFor(Symbol()))
// <- undefined


// 全域符號 不可能與 區域符號 衝突
const example = Symbol.for('example')
console.log(Symbol.keyFor(Symbol('example')))
// <- undefined


// 最佳實務案例與考量因素
// 使用 Symbol.for 在一個 頁面 和一個 iframe 框架 中回傳相同的符號
// 透過全域符號註冊表，使相同物件回傳相同參考
const d = document
const frame = d.body.appendChild(d.createElement('iframe'))
const framed = frame.contentWindow
const s1 = window.Symbol.for('example')
const s2 = framed.Symbol.for('example')
console.log(s1 === s2)
// <- true
