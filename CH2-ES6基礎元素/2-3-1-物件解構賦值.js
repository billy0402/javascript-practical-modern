var character = {
  name: 'Bruce',
  pseudonym: 'Batman',
  metadata: {
    age: 34,
    gender: 'male'
  },
  batarang: ['gas pellet', 'bat-mobile control', 'bat-cuffs']
}


// ES5
var pseudonym = character.pseudonym


// 單變數解構
var { pseudonym } = character


// 多變數解構
var { pseudonym, name } = character


// 多變數宣告
var { pseudonym } = character, two = 2


// 別名 (aliasing)
var { pseudonym: alias } = character
console.log(alias)
// <- 'Batman'


// 巢狀結構解構
var { metadata: { gender } } = character


// 別名更為直覺
var { metadata: { gender: characterGender } } = character


// ES5，存取不存在的特性
console.log(character.boots)
// <- undefined
console.log(character['boots'])
// <- undefined


// 透過解構存取不存在的特性
var { boots } = character
console.log(boots)
// <- undefined


// ES5，父物件為 undefined 或 null
// var nothing = null
// var missing = nothing.missing
// <- Exception


// 解構更為簡潔有效率
// var {boots: {size}} = character // <- Exception
// var {missing} = null  // <- Exception


// 設定初始值
var { boots = { size: 10 } } = character
console.log(boots)
// <- { size: 10 }


// 巢狀結構設定初始值
var { metadata: { enemy = 'Satan' } } = character
console.log(enemy)
// <- 'Satan'


// 同時設定 別名(先) 與 初始值(後)
var { boots: footwear = { size: 10 } } = character


// 在解構賦值中，透過運算取得特性名稱 (不太實用)
console.log(name)
// <- 'Bruce'
var { ['na' + 'me']: characterBoots } = character
console.log(characterBoots)
// <- 'Bruce'


// 一般賦值更加簡單直覺
var characterBoots = character[type]
var { [type]: characterBoots } = character
