// 與 Array#values 完全一樣
const list = ['a', 'b', 'c', 'd']
list[Symbol.iterator] === list.values
// <- true
console.log([...list[Symbol.iterator]()])
// <- [ 'a', 'b', 'c', 'd' ]


// 結合展開運算子. 陣列. Symbol.iterator 來迭代陣列的值
console.log([...['a', 'b', 'c', 'd'][Symbol.iterator]()])
// <- [ 'a', 'b', 'c', 'd' ]

// 逐步拆解
// 1. 有一個陣列
console.log(['a', 'b', 'c', 'd'])
// <- [ 'a', 'b', 'c', 'd' ]

// 2. 取得迭代器
console.log(['a', 'b', 'c', 'd'][Symbol.iterator]())
// <- Object [Array Iterator] {}

// 3. 將迭代器展開為新陣列，建立了一個陣列副本
console.log([...['a', 'b', 'c', 'd'][Symbol.iterator]()])
// <- [ 'a', 'b', 'c', 'd' ]
