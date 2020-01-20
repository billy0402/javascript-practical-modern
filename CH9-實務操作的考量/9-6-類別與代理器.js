// 以原型為基礎 (prototype-based) 撰寫類別
function Player () { // 函式本身就是類別建構子
  this.health = 5
}

Player.prototype.damage = function () {
  this.health--
}
Player.prototype.attack = function (player) {
  player.damage()
}


// 使用 class 實字建立類別
class Player {
  // 建構子
  constructor () {
    this.health = 5
  }

  // 實例方法
  damage () {
    this.health--
  }

  attack (player) {
    player.damage()
  }

  // 特性擷取器和設定器
  get alive () {
    return this.health > 0
  }

  // 靜態方法
  static heal (player) {
    player.health = 5
  }
}


// 使用 extends 原型繼承語法糖
class GameMaster extends Player {
  constructor (...rest) {
    super(...rest)
    this.health = Infinity
  }

  kill (player) {
    while (player.alive) {
      player.damage()
    }
  }
}


// 類別可以延伸自原生的內建功能
class List extends Array {
  constructor (...items) {
    super()
    this.push(...items)
  }

  get first () {
    return this[0]
  }

  get last () {
    return this[this.length - 1]
  }
}

const number = new List(2)
console.log(number.first)
// <- 2
const items = new List('a', 'few', 'examples')
console.log(items.last)
// <- 'examples'
