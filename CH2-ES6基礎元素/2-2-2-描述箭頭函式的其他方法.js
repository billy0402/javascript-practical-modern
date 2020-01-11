var example = (parameters) => {
  // 函式內容
}


// 僅一個參數可省略括號
var double = value => {
  return value * 2
}


// 僅一行運算可省略大括號及 return，並自動回傳值
var double = (value) => value * 2


// 小括號 及 回傳值 皆省略
var double = value => value * 2


// 隱性地 (Implicitly) 回傳物件實字，需額外加上小括號
var objectFactory = () => ({ modular: 'es6' })


// [1, 2, 3].map(value => {number: value})
// <- [ undefined, undefined, undefined ]


// [1, 2, 3].map(value => {number: value, verified: true})
// <- SyntaxError


[1, 2, 3].map(value => ({
  number: value,
  verified: true
}))
/* <- [
  { number: 1, verified: true },
  { number: 2, verified: true },
  { number: 3, verified: true }
] */
