function getCoordinates () {
  return {
    x: 10,
    y: 22,
    z: -1,
    type: '3d'
  }
}

// 使用 x, y 解構比使用中繼暫存 point 可讀性更高
var { x, y } = getCoordinates()


// 給予參數初始值
function random ({ min = 1, max = 10 } = {}) {
  return min + Math.floor(Math.random() * (max - min))
}

console.log(random())
// <- 7
console.log(random({ max: 24 }))
// <- 18


function splitDate (date) {
  var rdate = /(\d+).(\d+).(\d+)/
  return rdate.exec(date)
}

// 對應正規表示式參數，第一個參數為原始字串
var [, year, month, day] = splitDate('2020-01-10')


var matches = splitDate('2020-01-10')
// 無符合條件
if (matches === null) {
  // return undefined
}
var [, year, month, day] = matches
