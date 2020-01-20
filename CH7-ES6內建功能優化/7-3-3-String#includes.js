// String#includes: 確認字串是否包含指定字串
'hello gary'.includes('hell')
// <- true
'hello gary'.includes('ga')
// <- true
'hello gary'.includes('rye')
// <- false


// (ES5) 測試 String#indexOf 不等於 -1 時，表示字串包含指定字串
'hello gary'.indexOf('ga') !== -1
// <- true
'hello gary'.indexOf('rye') !== -1
// <- false


// 指定開始搜尋的索引位置
'hello gary'.includes('ga', 4)
// <- true
'hello gary'.includes('ga', 7)
// <- false
