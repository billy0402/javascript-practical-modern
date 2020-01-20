// String.fromCodePoint: 回傳輸入數值的的編碼點
// 十六進制，需加入前置字元 0x
String.fromCodePoint(0x1F40E)
// <- '🐎'
String.fromCodePoint(0x1F471)
// <- '👱'
String.fromCodePoint(0x2764)
// <- '❤'

// 十進制
String.fromCodePoint(128014)
// <- '🐎'
String.fromCodePoint(128113)
// <- '👱'
String.fromCodePoint(10084)
// <- '❤'


// 一次輸入多個編碼點數值
String.fromCodePoint(0x1F40E, 0x1F471, 0x2764)
// <- '🐎👱❤'

// 將字串映射至對應的編碼點數值，再自數值返回對應的編碼點
const text = '\ud83d\udc0e\ud83d\udc71\u2764'
console.log([...text]
  .map(cp => cp.codePointAt(0))
  .map(cp => String.fromCodePoint(cp))
  .join('')
)
// <- '🐎👱❤'
