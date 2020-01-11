const first = Symbol()

// Symbol 不能使用 new
// 避免類似 new Number(3) !== Number(3) 的混淆
// const oops = new Symbol()
// <- TypeError: Symbol 不是一個建構子

// 方便除錯
const myStery = Symbol('my symbol')


console.log(Number(3) === Number(3))
// <- true
// 符號一定是獨一無二的，即使使用同個敘述句建立
console.log(Symbol() === Symbol())
// <- false
console.log(Symbol('my symbol') === Symbol('my symbol'))
// <- false


// symbol 是 ES6 新的資料型態
console.log(typeof Symbol())
// <- 'symbol'
console.log(typeof Symbol('my symbol'))
// <- 'symbol'


const weapon = Symbol('weapon')
// 符號可以做為物件的特性鍵
const character = {
  name: 'Penguin',
  [weapon]: 'umbrella'
}
console.log(character[weapon])
// <- 'umbrella'


// 傳統的物件擷取鍵方式無法擷取到符號鍵
for (let key in character) {
  console.log(key)
  // <- 'name'
}
console.log(Object.keys(character))
// <- [ 'name' ]
console.log(Object.getOwnPropertyNames(character))
// <- [ 'name' ]
console.log(JSON.stringify(character))
// <- {"name":"Penguin"}


// 物件的符號鍵並非不可擷取
console.log(Object.getOwnPropertySymbols(character))
// <- [ Symbol(weapon) ]
