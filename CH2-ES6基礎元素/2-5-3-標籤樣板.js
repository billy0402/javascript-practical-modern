// 忽略跳脫字元
var text = String.raw`"\n" is take literally.
It'll be escaped instead of interpreted.`
console.log(text)

/*
"\n" is take literally.
It'll be escaped instead of interpreted.
 */


// 實作標籤樣板
function tag (parts, ...values) {
  return parts.reduce((all, part, index) =>
    all + values[index - 1] + part
  )
}

/*
tag(
  ['Hello, ', '. I am ', ' to meet you!'], // values
  'Maurice', // part[0]
  'thrilled' // part[1]
)
 */

var name = 'Maurice'
var emotion = 'thrilled'
var text = tag`Hello, ${name}. I am ${emotion} to meet you!`
console.log(text)
// <- 'Hello, Maurice. I am thrilled to meet you!'


// 將動態插入的文字字串轉為大寫字母
function upper (parts, ...values) {
  return parts.reduce((all, part, index) =>
    all + values[index - 1].toUpperCase() + part
  )
}

var name = 'Maurice'
var emotion = 'thrilled'
var text = upper`Hello, ${name}. I am ${emotion} to meet you!`
// <- 'Hello, MAURICE. I am THRILLED to meet you!'


// 將動態運算的結果淨化後插入字串
function sanitize (text) {
  return text.replace(/<.+>/g, '')
}

function sanitized (parts, ...values) {
  return parts.reduce((all, part, index) =>
    all + sanitize(values[index - 1]) + part
  )
}

var comment = 'Evil comment<iframe src="http://evil.corp"></iframe>'
var html = sanitized`<div>${comment}</div>`
console.log(html)
// <- '<div>Evil comment</div>'
