// JavaScript 是以原型為基礎 (prototype-based) 的語言
// 建構子函式
function Fruit (name, calories) {
  this.name = name
  this.calories = calories
  this.pieces = 1
}

// 原型鏈 (prototype chain)
Fruit.prototype.chop = function () {
  this.pieces++
}
Fruit.prototype.bite = function (person) {
  if (this.pieces < 1) {
    return
  }
  const calories = this.calories / this.pieces
  person.satiety += calories
  this.calories -= calories
  this.pieces--
}

// 改用 class 語法建立類別
class Fruit {
  constructor (name, calories) {
    this.name = name
    this.calories = calories
    this.pieces = 1
  }

  chop () {
    this.pieces++
  }

  bite (person) {
    if (this.pieces < 1) {
      return
    }
    const calories = this.calories / this.pieces
    person.satiety += calories
    this.calories -= calories
    this.pieces--
  }
}

// 吃水果的動作
const person = { satiety: 0 }
const apple = new Fruit('apple', 140)
// 切成四片
apple.chop()
apple.chop()
apple.chop()
// 吃掉三片
apple.bite(person)
apple.bite(person)
apple.bite(person)
console.log(person.satiety)
// <- 105
console.log(apple.pieces)
// <- 1
console.log(apple.calories)
// <- 35


// 類別與函式宣告不同，無法提升至最高作用域
new Person() // ReferenceError: Person 尚未定義
class Person {

}


// class 也能以運算式宣告，省略命名
const Person = class {
  constructor (name) {
    this.name = name
  }
}

// 透過類別運算式，繼承父類別，建立類別製造工廠
const createPersonClass = name => class extends Person {
  constructor () {
    super(name)
  }
}
const JackPerson = createPersonClass('Jack')
const jake = new JackPerson()
