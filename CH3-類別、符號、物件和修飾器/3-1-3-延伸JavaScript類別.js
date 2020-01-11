// 原型繼承
function Banana () {
  Fruit.call(this, 'banana', 105)
}

// 只能在 ES5 中使用
Banana.prototype = Object.create(Fruit.prototype)
Banana.prototype.slice = function () {
  this.pieces = 12
}


const util = require('util')

function Banana () {
  Fruit.call(this, 'banana', 105)
}

// 改用 Node.js 的 util.inherits 代替
util.inherits(Banana, Fruit)
Banana.prototype.slice = function () {
  this.pieces = 12
}

const person = { satiety: 0 }
const banana = new Banana()
banana.slice()
banana.bite(person)
console.log(person.satiety)
// <- 8.75
console.log(banana.pieces)
// <- 11
console.log(banana.calories)
// <- 96.25


// 繼承
class Banana extends Fruit {
  constructor () {
    // 呼叫父類別的建構子
    super('banana', 105)
  }

  slice () {
    this.pieces = 12
  }
}


// 建構子函式工廠 (constructor function factory)
const createJuicyFruit = (...params) =>
  class JuicyFruit extends Fruit {
    constructor () {
      super(...params)
      this.juice = 0
    }

    sqeeze () {
      if (this.calories <= 0) {
        return
      }
      this.calories -= 10
      this.juice += 3
    }
  }

class Plum extends createJuicyFruit('plum', 30) {
}
