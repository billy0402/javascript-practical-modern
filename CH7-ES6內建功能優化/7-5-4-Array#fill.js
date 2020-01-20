// 將指定 value 取代陣列中的所有資料項
['a', 'b', 'c'].fill('x')
// <- [ 'x', 'x', 'x' ]
new Array(3).fill('x')
// <- [ 'x', 'x', 'x' ]


// 指定起始和結束索引位置
// ['a', 'b', 'c', , ,].fill('x', 2)
// <- [ 'a', 'b', 'x', 'x', 'x' ]
new Array(5).fill('x', 0, 1)
// <- [ 'x', <4 empty items> ]


// value 不局限於原生型別 (primitive values)
new Array(3).fill({})
// <- [ {}, {}, {} ]


// 不能使用映射函式，將 index 參數或其他類似參數進行轉換後，再填入至陣列
const map = i => i * 2
new Array(3).fill(map)
// <- [ [Function: map], [Function: map], [Function: map] ] (無效)
