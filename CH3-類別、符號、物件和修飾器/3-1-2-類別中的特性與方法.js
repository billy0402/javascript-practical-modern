// 透過參數初始化類別實體
class Log {
  // constructor 為選用，非必要
  constructor (...args) {
    console.log(args)
  }
}

new Log('a', 'b', 'c')
// <- [ 'a', 'b', 'c' ]


class Counter {
  constructor (start) {
    this.count = start
  }

  // 存取 .next 特性時，呼叫同名方法
  get next () {
    return this.count++
  }
}

const counter = new Counter(2)
console.log(counter.next)
// <- 2
console.log(counter.next)
// <- 3
console.log(counter.next)
// <- 4


class LocalStorage {
  constructor (key) {
    this.key = key
  }

  // 擷取器 (getter)
  get data () {
    return JSON.parse(localStorage.getItem(this.key))
  }

  // 設定器 (setter)
  set data (data) {
    localStorage.setItem(this.key, JSON.stringify(data))
  }
}

const ls = new LocalStorage('groceries')
ls.data = ['apples', 'bananas', 'grapes']
console.log(ls.data)
// <- ['apples', 'bananas', 'grapes']


class Person {
  constructor () {
    this.satiety = 0
  }

  eat (fruit) {
    while (fruit.pieces > 0) {
      fruit.bite(this)
    }
  }
}

const plum = new Fruit('plum', 40)
const person = new Person()
person.eat(plum)
console.log(person.satiety)
// <- 40


// ES5
function Person () {
  this.hunger = 100
}

// 實體成員必須明確地加入至原型鏈
Person.prototype.eat = function () {
  this.hunger--
}
// 靜態方法必須直接在建構子中定義
Person.isPerson = function (person) {
  return person instanceof Person
}


class MathHelper {
  // 靜態方法
  static sum (...numbers) {
    return numbers.reduce((a, b) => a + b)
  }
}

console.log(MathHelper.sum(1, 2, 3, 4, 5))
// <- 15
