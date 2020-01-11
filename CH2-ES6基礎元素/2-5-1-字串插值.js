// 將變數插入字串樣板
var name = 'Shannon'
var text = `Hello, ${name}`
console.log(text)
// <- Hello, Shannon


// 將運算式插入字串樣板
text = `The time and date is ${new Date().toLocaleString()}`
// <- The time and date is 1/10/2020, 6:14:04 PM


// 將數學運算式插入字串樣板
text = `The result of 2+3 equals ${2 + 3}`
// <- The result of 2+3 equals 5


// 巢狀字串樣板
text = `This template literal ${`is ${'nested'}`}!`
// <- This template literal is nested!
