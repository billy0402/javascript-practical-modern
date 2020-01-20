// (ES5) 使用 String#indexOf 檢查指定字串是否在字串內
'hello gary'.indexOf('gary')
// <- 6，包含但不是開頭
'hello gary'.indexOf('hello')
// <- 0，包含且是開頭
'hello gary'.indexOf('stephan')
// <- -1，根本不在字串內

// (ES5) String#indexOf 是索引值 0 代表是以指定字串為字串開頭
'hello gary'.indexOf('gary') === 0
// <- false
'hello gary'.indexOf('hello') === 0
// <- true
'hello gary'.indexOf('stephan') === 0
// <- false

// 改用 String#startsWith
'hello gary'.startsWith('gary')
// <- false
'hello gary'.startsWith('hello')
// <- true
'hello gary'.startsWith('stephan')
// <- false


// 透過 String#indexOf 確認指定字串位於指定位置
'hello gary'.slice(6).indexOf('gary') === 0
// <- true

// 無法僅檢查索引值，因為查詢在抵達索引值之前就找到符合條件的結果
'hello ell'.indexOf('ell') === 6
// <- false

// 使用 indexOf 的 startIndex 取代 String#slice
// 索引值比較不可以省略，因為字串為切割
'hello ell'.indexOf('ell', 6) === 6
// <- true

// 改用 String#startsWith
'hello ell'.startsWith('ell', 6)
// <- true
