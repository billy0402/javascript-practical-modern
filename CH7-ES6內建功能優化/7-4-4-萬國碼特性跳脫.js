// https://github.com/mathiasbynens/regexpu-core/blob/master/property-escapes.md
// \p{LoneUnicodePropertyNameOrValue}: 二進位萬國碼特性
// \p{UnicodePropertyName=UnicodePropertyValue}: 非二進位萬國碼特性
// 比對希臘語萬國碼符號
function isGreekSymbol (input) {
  const rgreek = /^\p{Script=Greek}$/u
  return rgreek.test(input)
}

isGreekSymbol('π')
// <- true


// \P 為 \p 的否定版
// 比對非希臘語萬國碼符號
function isNonGreekSymbol (input) {
  const rgreek = /^\P{Script=Greek}$/u
  return rgreek.test(input)
}

isNonGreekSymbol('π')
// <- false


// 比對所有的萬國碼小數數值符號，不只是 \d 的 [0-9]
function isDecimalNumber (input) {
  const rDigits = /^\p{Decimal_Number}+$/u
  return rDigits.test(input)
}

isDecimalNumber('１２３４５６７８９０')
// <- true
