const morphling = {
  // Symbol.toPrimitive 可以使用函式決定將物件轉換為一個基礎型別的值
  // hint 參數可以為 'string'. 'number' or 'default
  [Symbol.toPrimitive] (hint) {
    if (hint === 'string') {
      return 'a lot'
    }

    if (hint === 'number') {
      return Infinity
    }

    return '[object Morphling]'
  }
}
console.log(+morphling)
// <- Infinity
console.log(`That is ${morphling}`)
// <- 'That is a lot'
console.log(morphling + 'is powerful')
// <- '[object Morphling]is powerful'


const text = '/an example string/'
const regex = /an example string/
// 將 Symbol.match 設定為 false 的正規運算式，被視為一個字串
// 用於將 字串 與 正規運算式描述的字串 進行比較
regex[Symbol.match] = false
// 可配合 .startsWith .endsWith .includes 使用
console.log(text.startsWith(regex))
// <- true


// 不透過註冊表於程式領域進行分享
const frame = document.createElement('iframe')
document.body.appendChild(frame)
console.log(Symbol.iterator === frame.contentWindow.Symbol.iterator)
// <- true
// 通用符號可於程式領域間分享，但並不存在於全域註冊表中
console.log(Symbol.keyFor(Symbol.iterator))
// <- undefined
