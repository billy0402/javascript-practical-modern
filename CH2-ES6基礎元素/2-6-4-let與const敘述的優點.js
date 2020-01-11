var items = ['a', 'b', 'c']
var todo = checkList(items)
todo.check()
console.log(items)
// <- [ 'b', 'c' ]

items = ['d', 'e']
todo.check()
console.log(items)
// <- [ 'd', 'e' ]
// 如果 items 改用 const，應該是 [ 'c' ]

function checkList (items) {
  return {
    check: () => items.shift()
  }
}


/*
預設以 const 宣告變數，
let 宣告可能重新指派的變數
var 已失去效用
 */
