function powerOf (base, exponent = 2) {
  return Math.pow(base, exponent)
}


// 設定初始值於箭頭函式 (僅一個參數，小括號也不能省略)
var double = (input = 0) => input * 2


// 含初始值參數不一定要放在右方，可以放在任意位置
function sumOf (a = 1, b = 2, c = 3) {
  return a + b + c
}

console.log(sumOf(undefined, undefined, 4))
// <- 1 + 2 + 4 = 7


// 預設 options 給未提供指定的物件
var defaultOptions = {
  brand: 'Volkswagen',
  make: 1999
}

function carFactory (options = defaultOptions) {
  console.log(options.brand)
  console.log(options.make)
}

carFactory()
// <- 'Volkswagen'
// <- 1999


// (問題) 傳遞 options 時，失去初始值
carFactory({ make: 2000 })
// <- undefined
// <- 2000
