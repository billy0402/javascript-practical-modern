// 字串插值
'Hello, ' + name + '!' // ES6 之前
`Hello, ${name}!` // ES6 之後


// 多行文字
// ES6 之前
'<div>' +
  '<p>' +
    '<span>Hello</span>' +
    '<span>' + name + '</span>' +
    '<span>!</span>' +
  '</p>' +
'</div>'

// ES6 之後
`<div>
  <p>
    <span>Hello</span>
    <span>${name}</span>
    <span>!</span>
  </p>
</div>`


// 單引號與雙引號省略跳脫字元
// ES6 之前
'Alfred\'s cat suit is "slick".'
"Alfred's cat suit is \"slick\"."

// ES6 之後
`Alfred's cat suit is "slick".`


const suitKind = `cat`
console.log(`Alfred's ${suitKind} suit is "slick".`)
// <- Alfred's cat suit is "slick".

// Babel 編譯器會將 字串樣板 轉換為 引號字串並串接起來
// 增加瀏覽器支援度，停止向下相容不影響效能
const suitKind = 'cat'
console.log('Alfred\'s ' + suitKind + ' suit is "slick".')
// <- Alfred's cat suit is "slick".


// 無法在 JSON 字串. 物件的鍵. import 宣告敘述. 嚴格模式指令中 使用反引號
// 序列化的 JSON 物件無法使用反引號表示字串
JSON.parse('{ "payload": `message` }')
// <- SyntaxError
// 使用字串樣板宣告物件再序列化為 JSON 格式
JSON.stringify({ payload: `message` })
// <- '{"payload":"message"}'


// 物件的鍵可接受實值型別 (value types)，會在被轉換為字串型態
// 但字串樣板並非實值型別，不能作為物件的鍵
// const alfred = { `suit kind`: `cat` }
// <- SyntaxError

// 透過運算式取得特性鍵，運算式也包含字串樣板
const alfred = { [`suit kind`]: `cat` }
// 過於冗長，最好還是使用一般的引號字串

// (希望) 不需要依賴方括號來使用字串樣板
// const brand = `Porsche`
// const car = {
//   `wheels`: 4,
//   `has fuel`: true,
//   `is ${ brand }`: `you wish`
// }


// 不能使用字串樣板匯入模組
// import { SayHello } from `./World.js`
// <- SyntaxError


'use strict' // 啟用嚴格模式
"use strict" // 啟用嚴格模式
`use strict` // 無任何動作發生


// 設定 eslint 強制引號只能使用反引號
// eslintrc.json
// {
//   "env": {
//     "es6": true
//   },
//   "extends": "eslint:recommended",
//   "rules": {
//     "quotes": ["error", "backtick"]
//   }
// }
// 使用 npm run lint 檢查語法
// package.json
// {
//   "scripts": {
//     "lint": "eslint --fix ."
//   }
// }
