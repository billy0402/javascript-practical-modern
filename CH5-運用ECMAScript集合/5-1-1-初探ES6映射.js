const map = new Map()
map.set('contra', { description: 'Asynchronous flow control' })
map.set('dragula', { description: 'Drag and drop' })
map.set('woofmark', { description: 'Markdown and WYSIWYG editor' })
console.log([...map])
// <- [
// <-   [ 'contra', { description: 'Asynchronous flow control' } ],
// <-   [ 'dragula', { description: 'Drag and drop' } ],
// <-   [ 'woofmark', { description: 'Markdown and WYSIWYG editor' } ]
// <- ]

// 查詢鍵值是否存在
map.has('contra')
// <- true
map.has('jquery')
// <- false

// 取得資料
map.get('contra')
// <- { description: 'Asynchronous flow control' }

// 刪除資料
map.delete('contra')
// <- true
map.get('contra')
// <- undefined


// 鍵值不僅限於字串
const map = new Map([[1, 'the number one']])
// 查詢鍵值不會自動轉成字串
map.has(1)
// <- true
map.has('1')
// <- false


const map = new Map([[1, 2], [3, 4], [5, 6]])
map.has(1)
// <- true
// 清空 Map
map.clear()
// <- undefined
map.has(1)
// <- false
console.log([...map])
// <- []


const map = new Map([[1, 2], [3, 4], [5, 6]])
// 取得資料總數
map.size
// <- 3
map.delete(3)
map.size
// <- 2
map.clear()
map.size
// <- 0


// 鍵值可以是任意物件
// 原生資料型態: 數值. 字串. 符號
// 儲存資料參考: 函式. 物件. 日期. DOM元件
const map = new Map()
map.set(new Date(), function today () {
})
map.set(() => 'key', { key: 'door' })
map.set(Symbol('item'), [1, 2])

const map = new Map()
// 以符號作為鍵值，需保存其參考
const key = Symbol('items')
map.set(key, [1, 2])
map.get(Symbol('items')) // 與 "key" 的參考不同
// <- undefined
map.get(key)
// <- [ 1, 2 ]


const items = [
  [new Date(), function today () {
  }],
  [() => 'key', { key: 'door' }],
  [Symbol('item'), [1, 2]]
]
const map = new Map()
// 將 鍵值陣列 塞進 Map
for (const [key, value] of items) {
  map.set(key, value)
}

const map = new Map([[1, 2], [3, 4], [5, 6]])
const copy = new Map()
// Map 也是可迭代物件，透過迭代複製 Map
for (const [key, value] of map) {
  copy.set(key, value)
}

// 可以透過任何 可迭代 和 可產生鍵值 的 集合物件 來初始 Map
const items = [
  [new Date(), function today () {
  }],
  [() => 'key', { key: 'door' }],
  [Symbol('item'), [1, 2]]
]
const map = new Map(items)

// 複製 Map
const map = new Map([[1, 2], [3, 4], [5, 6]])
const copy = new Map(map)

// 透過展開運算子，將映射物件餵入至其他映射物件
const map = new Map()
map.set(1, 'one')
map.set(2, 'two')
map.set(3, 'three')
console.log([...map])
// <- [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

// 結合 Map映射. for...of迴圈. let變數 和字串樣板
const map = new Map()
map.set(1, 'one')
map.set(2, 'two')
map.set(3, 'three')
for (const [key, value] of map) {
  console.log(`${key}: ${value}`)
  // <- 1: one
  // <- 2: two
  // <- 3: three
}


// Map 的鍵值是唯一的，新值會覆蓋舊值
const map = new Map()
map.set('a', 1)
map.set('a', 2)
map.set('a', 3)
console.log([...map])
// <- [ [ 'a', 3 ] ]

// 映射物件鍵值比較使用 SameValueZero 演算法
// NaN 與 NaN 相等，-0 與 +0 相等
console.log(NaN === NaN)
// <- false
console.log(-0 === +0)
// <- true
const map = new Map()
map.set(NaN, 'one')
map.set(NaN, 'two')
map.set(-0, 'three')
map.set(+0, 'four')
console.log([...map])
// <- [ [ NaN, 'two' ], [ 0, 'four' ] ]


// Map 是透過 .entries() 進行迭代
const map = new Map()
console.log(map[Symbol.iterator] === map.entries)
// <- true

const map = new Map([[1, 2], [3, 4], [5, 6]])
console.log([...map.entries()]) // 鍵值迭代器
// <- [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log([...map.keys()]) // 鍵迭代器
// <- [ 1, 3, 5 ]
console.log([...map.values()]) // 值迭代器
// <- [ 2, 4, 6 ]
// 映射是依據資料加入的順序迭代 (JavaScript 引擎，非程式碼)
// Object.keys 是依據鍵擷取資料，並無一定順序

const map = new Map([
  [NaN, 1],
  [Symbol(), 2],
  ['key', 'value'],
  [{ name: 'Kent' }, 'is a person']
])
// 類似 ES5 的 Array 物件，鍵值無法被轉換成字串
map.forEach((value, key) => console.log(key, value))
// <- NaN 1
// <- Symbol() 2
// <- key value
// <- { name: 'Kent' } is a person
