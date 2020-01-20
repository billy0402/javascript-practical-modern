// 使用字串迭代器取得編碼點
for (const codePoint of '🐎👱❤') {
  console.log(codePoint)
  // <- '🐎'
  // <- '👱'
  // <- '❤'
}

// 使用展開運算子取得編碼點數量，emoji 為連續碼配對才有效
// 其他符號的編碼集合未被字串迭代器納入考量
[...'🐎👱❤'].length
// <- 3


function overlined (text) {
  // 上劃線的編碼單元: \u0305
  return `${text}\u0305`
}

overlined('o')
// <- 'o̅'
'hello world'.split('').map(overlined).join('')
// <- 'h̅e̅l̅l̅o̅ ̅w̅o̅r̅l̅d̅'

// 上劃線與其他文字融合，無法取得正確長度
console.log('o̅'.length)
// <- 2
console.log('h̅e̅l̅l̅o̅ ̅w̅o̅r̅l̅d̅'.length)
// <- 22，應該是 1
console.log([...'h̅e̅l̅l̅o̅ ̅w̅o̅r̅l̅d̅'].length)
// <- 22，應該是 11
console.log([...'h̅e̅l̅l̅o̅ world'].length)
// <- 16，應該是 11
