// String#codePointAt: 取得字串中指定位置編碼點的數值表示方式
// 起始位置是以編碼單元為單位開始索引，不是編碼點
const text = '\ud83d\udc0e\ud83d\udc71\u2764'
text.codePointAt(0)
// <- 128014
text.codePointAt(2)
// <- 128113
text.codePointAt(4)
// <- 10084


// 提供索引並不容易，改用迴圈總是取得起始索引 (0)
const text = '\ud83d\udc0e\ud83d\udc71\u2764'
for (const codePoint of text) {
  console.log(codePoint.codePointAt(0))
  // <- 128014
  // <- 128113
  // <- 10084
}


// 結合 展開運算子 與 Array#map
const text = '\ud83d\udc0e\ud83d\udc71\u2764'
console.log([...text].map(cp => cp.codePointAt(0)))
// <- [ 128014, 128113, 10084 ]

// 將編碼點從十進制轉為十六進制
const text = '\ud83d\udc0e\ud83d\udc71\u2764'
console.log([...text].map(cp => cp.codePointAt(0).toString(16)))
// <- [ '1f40e', '1f471', '2764' ]

// 將十六進制包裹於 '\u{codePoint}' 取回 emoji 符號
console.log('\u{1f40e}')
// <- 🐎
console.log('\u{1f471}')
// <- 👱
console.log('\u{2764}')
// <- ❤
