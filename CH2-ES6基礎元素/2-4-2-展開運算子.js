// 展開運算子: 將任何可迭代物件 (iterable object) 轉換成陣列

// 將函式參數轉換為陣列
function cast () {
  return [...arguments]
}

cast('a', 'b', 'c')
// <- [ 'a', 'b', 'c' ]


// 將字串轉換為字元陣列
console.log([...'show me'])
// <- ['s', 'h', 'o', 'w', ' ', 'm', 'e']


// 在展開運算子左右加入其他陣列元素
function cast () {
  return ['left', ...arguments, 'right']
}

cast('a', 'b', 'c')
// <- [ 'left', 'a', 'b', 'c', 'right' ]


// 合併多個陣列
var all = [1, ...[2, 3], 4, ...[5], 6, 7]
console.log(all)
// <- [1, 2, 3, 4, 5, 6, 7]


// (ES5) 遞移回傳 (Shifting): 依序擷取陣列元素
var list = ['a', 'b', 'c', 'd', 'e']
var first = list.shift() // 'a'
var second = list.shift() // 'b'
console.log(list)
// <- [ 'c', 'd', 'e' ]

// 透過展開 (Spreading) + 陣列解構賦值 達成遞移回傳
var [first, second, ...other] = ['a', 'b', 'c', 'd', 'e']
console.log(other)
// <- [ 'c', 'd', 'e' ]


function multiply (left, right) {
  return left * right
}

// (ES5) 透過 apply 將動態的參數串列傳入函式應用
// 傳入 null 避免 apply 去參考 this
var result = multiply.apply(null, [2, 3])
console.log(result)
// <- 6

// 改用展開運算子傳入任意數量的引數
var result = multiply(...[2, 3])
console.log(result)
// <- 6


function print (...list) {
  console.log(list)
}

// 函式呼叫時，引數展開混合一般傳遞
print(1, ...[2, 3], 4, ...[5])
// <- [ 1, 2, 3, 4, 5 ]


// (ES5) 透過 apply new 物件變得十分冗長
// JavaScript 的月份從 0 開始
new (Date.bind.apply(Date, [null, 2020, 0, 10]))
// <- 2020-01-09T16:00:00.000Z

// 改用展開運算子 new 物件
new Date(...[2020, 0, 10])
// <- 2020-01-09T16:00:00.000Z


/*
字串連結:
ES5: [1, 2].concat(more)
ES6: [1, 2, ...more]

將元素置入陣列:
ES5: list.push.apply(list, items)
ES6: list.push(...items)

解構賦值:
ES5: a = list[0], other = list.slice(1)
ES6: [a, ...other] = list

new 與 apply 並用
ES5: new (Date.bind.apply(Date, [null, 2020, 0, 10]))
ES6: new Date(...[2020, 0, 10])
 */
