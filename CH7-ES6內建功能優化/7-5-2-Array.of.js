// 向下相容 Array.of
function arrayOf (...items) {
  return items
}


/*
Array 建構子有兩種多載 (overloads):
1. ...items: 陣列的資料項
2. length: 陣列的長度，被稱為稀疏陣列 (sparse array)
 */
new Array() // <- []
new Array(undefined) // <- [ undefined ]
new Array(1) // <- [ <1 empty item> ]
new Array(3) // <- [ <3 empty items> ]
new Array('3') // <- [ '3' ]
new Array(1, 2) // <- [ 1, 2 ]
new Array(-1, -2) // <- [ -1, -2 ]
// new Array(-1) // <- RangeError: 無效的陣列長度


// Array.of 沒有陣列長度，會一致性的建立行為
Array.of() // <- []
Array.of(undefined) // <- [ undefined ]
Array.of(1) // <- [ 1 ]
Array.of(3) // <- [ 3 ]
Array.of('3') // <- [ '3' ]
Array.of(1, 2) // <- [ 1, 2 ]
Array.of(-1, -2) // <- [ -1, -2 ]
Array.of(-1) // <- [ -1 ]
