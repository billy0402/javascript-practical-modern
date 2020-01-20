// 客製 正規表達式 與 匹配群組
function * parseAttributes (input) {
  const rAttributes = /(\w+)="([^"]+)"\s/ig // 全域比對模式 或 黏著比對模式

  while (true) {
    const match = rAttributes.exec(input) // String#match 或 RegExp#exec

    if (match === null) { // 沒有匹配結果
      break
    }

    const [, key, value] = match
    yield [key, value]
  }
}

const html = '<input type="email" placeholder="hello@mjavascript.com" />'
console.log(...parseAttributes(html))
// <- [ 'type', 'email' ] [ 'placeholder', 'hello@mjavascript.com' ]


// 通用 正規表達式 與 匹配群組
function * matchAll (regex, input) {
  while (true) {
    const match = regex.exec(input)

    if (match === null) {
      break
    }

    const [, ...captures] = match
    yield captures
  }
}

function * parseAttributes (input) {
  const rAttributes = /(\w+)="([^"]+)"\s/ig
  yield * matchAll(rAttributes, input)
}

const html = '<input type="email" placeholder="hello@mjavascript.com" />'
console.log(...parseAttributes(html))
// <- [ 'type', 'email' ] [ 'placeholder', 'hello@mjavascript.com' ]

// rAttributes 在每次呼叫時，RegExp#exec 會改變它的 lastIndex 特性，也就是最後一個匹配的位置
// 當沒有任何匹配結果時，lastIndex 會重置為 0
// 當不是一次迭代所有結果時，lastIndex 尚未重置，下次比對的結果無法預期
const rAttributes = /(\w+)="([^"]+)"\s/ig
const email = '<input type="email" placeholder="hello@mjavascript.com" />'
const emailMatcher = matchAll(rAttributes, email)
const address = '<input type="text" placeholder="Enter your business address" />'
const addressMatcher = matchAll(rAttributes, address)
console.log(emailMatcher.next().value)
// <- [ 'type', 'email' ]
console.log(rAttributes.lastIndex)
// <- 20
console.log(addressMatcher.next().value)
// <- [ 'laceholder', 'Enter your business address' ]


// 調整 matchAll 函式
function * matchAll (regex, input) {
  let lastIndex = 0
  while (true) {
    regex.lastIndex = lastIndex // 重置 lastIndex
    const match = regex.exec(input)

    if (match === null) {
      break
    }

    lastIndex = regex.lastIndex // 保存 lastIndex
    const [, ...captures] = match
    yield captures
  }
}

const rAttributes = /(\w+)="([^"]+)"\s/ig
const email = '<input type="email" placeholder="hello@mjavascript.com" />'
const emailMatcher = matchAll(rAttributes, email)
const address = '<input type="text" placeholder="Enter your business address" />'
const addressMatcher = matchAll(rAttributes, address)
console.log(emailMatcher.next().value)
// <- [ 'type', 'email' ]
console.log(addressMatcher.next().value)
// <- [ 'type', 'text' ]
console.log(emailMatcher.next().value)
// <- [ 'placeholder', 'hello@mjavascript.com' ]
console.log(addressMatcher.next().value)
// <- [ 'placeholder', 'Enter your business address' ]


// String#matchAll
const rAttributes = /(?<key>\w+)="(?<value>[^"]+)"\s/igu
const email = '<input type="email" placeholder="hello@mjavascript.com" />'
for (const match of email.matchAll(rAttributes)) {
  const { groups: { key, value } } = match
  console.log(`${key}: ${value}`)
  // <- type: email
  // <- placeholder: hello@mjavascript.com
}
