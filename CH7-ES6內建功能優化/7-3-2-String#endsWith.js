// String#lastIndexOf <-> String#indexOf
// String#endsWith <-> String#startsWith
'hello gary'.endsWith('gary')
// <- true
'hello gary'.endsWith('hello')
// <- false


// endIndex 指向要結束搜尋的索引位置
'hello gary'.endsWith('gary', 10)
// <- true
'hello gary'.endsWith('gary', 9)
// <- false，會結束於 'gar'
'hello gary'.endsWith('hell', 4)
// <- true
