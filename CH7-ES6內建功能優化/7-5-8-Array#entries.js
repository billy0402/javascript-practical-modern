// 回傳一個鍵值序列的迭代器
['a', 'b', 'c', 'd'].entries()
// <- Object [Array Iterator] {}


// 資料是二維陣列，包含鍵跟值
console.log([...['a', 'b', 'c', 'd'].entries()])
// <- [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'd' ] ]
