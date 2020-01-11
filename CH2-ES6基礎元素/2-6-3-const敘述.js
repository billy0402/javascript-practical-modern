// const 依循區塊作用域
const pi = 3.1415
{
  const pi = 6
  console.log(pi)
  // <- 6
}
console.log(pi)
// <- 3.1415


// const 和 let 差別:
// 1. 必須使用初始器 (initializer)
const e = 2.7182
// const i // <- SyntaxError: 缺少初始器


// 2. 宣告後不能再被指派
const people = ['Tesla', 'Musk']
people = []
// <- (strict mode) TypeError: 指派常數
console.log(people)
// <- ['Tesla', 'Musk']


// const 的參考本身可以變更
const people = ['Tesla', 'Musk']
people.push('Berners-Lee')
console.log(people)
// <- [ 'Tesla', 'Musk', 'Berners-Lee' ]


// var 可以變更指派對象，const 不行
const people = ['Tesla', 'Musk']
var humans = people
humans = 'evil'
console.log(humans)
// <- 'evil'


// 透過 Object.freeze 防止參考被變更
const frozen = Object.freeze(
  ['Ice', 'Icicle', 'Ice cube']
)
frozen.push('Water')
// <- TypeError: 無法於 位置3 加入特性，物件不可延伸
