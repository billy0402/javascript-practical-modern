/*
Set 集合 與 Map 映射 相同:
- 可迭代
- 建構子可傳入一個迭代物件
- 具有 .size 特性
- 值可以是任何值或參考，但必須是唯一，類似 Map 的鍵
- NaN 等於 NaN
- 具有 .keys .values .entries. forEach .has .delete 和 .clear
Set 集合 與 Map 映射 不同:
- 資料項比較類似陣列，一維 (one-dimensional) 的，唯一的，沒有鍵值配對
 */

const set = new Set()
const example = { an: 'example' }
// 沒有 .set，不會將 key 指向 value
// 使用 .add 直接將值加入 set 中
set.add(example)
// 沒有 .get(value)，value 是一維且唯一的
// 使用 .has(value) 確認值是否在集合中
set.has(example)
// <- true


// 可迭代取值，沒有鍵值
const set = new Set(['a', 'b', 'c'])
console.log([...set])
// <- [ 'a', 'b', 'c' ]


// 資料是唯一的
const set = new Set(['a', 'b', 'c', 'c', 'c'])
console.log([...set])
// <- [ 'a', 'b', 'c' ]


function divs () {
  return document.querySelectorAll('div')
}

const set = new Set(divs()) // 包含頁面所有的 <div> 元件
console.log(set.size) // 輸出元件總數
// <- 277
divs().forEach(div => set.add(div)) // 如果元件已存在於 set
console.log(set.size)// set本身 跟 size特性 特性維持不變
// <- 277


// 因為 Set 沒有 key，Set#entries 會回傳一個 [value, value] 迭代器
const set = new Set(['a', 'b', 'c'])
console.log([...set.entries()])
// <- [ [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] ]
// 迭代使用 for...of. Array.from，而不是 Set#entries


// Map 預設迭代器指向 Set#entries
const map = new Map()
console.log(map[Symbol.iterator] === map.entries) // [key, value]
// <- true
// Set 預設迭代器指向 Set#values
const set = new Set()
console.log(set[Symbol.iterator] === set.entries) // [value, value]
// <- false
console.log(set[Symbol.iterator] === set.values)
// < -true
// 為了保持一制性，提供 Set#keys 的 API，參考指向 Set#values
console.log(set.keys === set.values)
// < -true
