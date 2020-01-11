var coordinates = [12, -7]
var [x, y] = coordinates
console.log(x)
// <- 12


// 省略不需要的值
var names = ['James', 'L.', 'Howlett']
var [firstName, , lastName] = names
console.log(lastName)
// <- 'Howlett'


// 設定初始值
var names = ['James', 'L.']
var [firstName = 'John', , lastName = 'Doe'] = names
console.log(lastName)
// <- 'Doe'


// ES5，兩數交換
var left = 5
var right = 7
var aux = left
left = right
right = aux


// 透過解構，兩數交換
var left = 5
var right = 7
[left, right] = [right, left]
