// 回傳一個鍵序列的迭代器
['a', 'b', 'c', 'd'].keys()
// <- Object [Array Iterator] {}


// 可使用 for...of. 展開運算子 .next() 迭代
for (const key of ['a', 'b', 'c', 'd'].keys()) {
  console.log(key)
  // <- 0
  // <- 1
  // <- 2
  // <- 3
}


// 不會忽略陣列中沒有資料項的洞 (array holes)
console.log(Object.keys(new Array(4)))
// <- []
console.log([...new Array(4).keys()])
// <- [ 0, 1, 2, 3 ]
