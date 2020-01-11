{
  // 暫時性死區 Temporal Dead Zone (TDZ):
  // 對尚未宣告的 let 變數進行存取
  // console.log(name)
  // ReferenceError: name 尚未定義
  let name = 'Stephen Hawking'
}


function readName () {
  // 在 let 宣告後執行
  return name
}

let name = 'Stephen Hawking'
// let name
console.log(readName())
// <- 'Stephen Hawking'
// <- undefined


function readName () {
  // 在 let 宣告前執行
  return name
}

console.log(readName())
// <- ReferenceError: name 尚未定義
let name = 'Stephen Hawking'
// let name
