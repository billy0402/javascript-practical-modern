// (ES5) 將傳入函式的 arguments 引數轉換為陣列
function cast () {
  return Array.prototype.slice.call(arguments)
}

cast('a', 'b')
// <- [ 'a', 'b' ]

// 利用展開運算子將 arguments 轉換為陣列
function cast () {
  return [...arguments]
}

cast('a', 'b')
// <- [ 'a', 'b' ]

// 利用其餘參數將 arguments 轉換為陣列
function cast (...params) {
  return params
}

cast('a', 'b')
// <- [ 'a', 'b' ]


// 使用展開運算子將 NodeList (DOM元件) 集合轉換為陣列
console.log([...document.querySelectorAll('div')])
// <- [<div>, <div>, <div>, ...]

// 使用展開運算子將 jQuery 集合轉換為陣列
// 需自行實作迭代協議，否則會產生例外錯誤
console.log([...$('div')])
// <- [<div>, <div>, <div>, ...]

// Array.from 支援類陣列輸入值，不需要仰賴迭代器
// 將 jQuery 集合轉換為陣列
console.log(Array.from($('div')))


// 指定起始索引，展開運算子 和 Array.from 都無法達成
// [].slice.call(document.querySelectorAll('div'), 1)

// 先轉換型別在使用 Array#slice 指定起始索引
Array.from(document.querySelectorAll('div')).slice(1)


/*
傳入 Array.from 的三個引數:
1. input (必要): 欲轉換的類陣列 (array-like) 資料或可迭代物件
2. map: 對每個 input 項目直直的映射函式
3. context: 呼叫 map 時，用來與 this 繫結
 */

// Array.from 無法對陣列進行切割，但透過 map 進行有效率地轉換
function typesOf () {
  return Array.from(arguments, value => typeof value)
}

typesOf(null, [], NaN)
// <- [ 'object', 'object', 'number' ]

// 結合 其餘參數 和 Array#map
function typesOf (...all) {
  return all.map(value => typeof value)
}

typesOf(null, [], NaN)
// <- [ 'object', 'object', 'number' ]


// 使用 Array.from 處理未實作 Symbol.iterator 的類陣列物件
const apple = {
  type: 'fruit',
  name: 'Apple',
  amount: 3
}
const onion = {
  type: 'vegetable',
  name: 'Onion',
  amount: 1
}
const groceries = {
  0: apple,
  1: onion,
  length: 2
}
Array.from(groceries)
/*
[
  { type: 'fruit', name: 'Apple', amount: 3 },
  { type: 'vegetable', name: 'Onion', amount: 1 }
]
 */
Array.from(groceries, grocery => grocery.type)
// <- [ 'fruit', 'vegetable' ]
