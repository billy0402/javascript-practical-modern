// JavaScript 字串以 UTF-16 編碼表示
// 基本多語言平面 BMP (Base Multilingual Plane)
// [U+0000, U+FFFF] 之間的編碼點 (code point) >> \u0000 ... \uFFFF
console.log('\u00BB')
// <- '»'

// [U+0000, U+0255] >> \x00 ... \xFF
console.log('\xBB')
// <- '»'

// 驗證函式
console.log(String.fromCharCode('0xBB'))
// <- '»'


// 多個編碼單元表示法
console.log('\u{1f40e}')
// <- '🐎'
console.log('\ud83d\udc0e\ud83d\udc71\u2764')
// <- '🐎👱❤'
console.log('\ud83d\udc0e\ud83d\udc71\u2764'.length)
// <- 5，編碼單元長度為 5，字串長度為 3


// 編碼點數量難以計算
Object.keys('🐎👱❤')
// <- [ '0', '1', '2', '3', '4' ]

// 擷取編碼單元
const text = '🐎👱❤'
for (let i = 0; i < text.length; i++) {
  console.log(text[i])
  // <- '\ud83d'
  // <- '\udc0e'
  // <- '\ud83d'
  // <- '\udc71'
  // <- '\u2764'
}
