// 回傳一個值序列的迭代器
['a', 'b', 'c', 'd'].values()
// <- Object [Array Iterator] {}


// 可使用 for...of. 展開運算子 .next() 迭代
// 對陣列的 .values() 使用展開運算子建立陣列的副本
console.log([...['a', 'b', 'c', 'd'].values()])
// <- [ 'a', 'b', 'c', 'd' ]
// 對陣列的直接使用展開運算子建立陣列的副本
console.log([...['a', 'b', 'c', 'd']])
// <- [ 'a', 'b', 'c', 'd' ]
