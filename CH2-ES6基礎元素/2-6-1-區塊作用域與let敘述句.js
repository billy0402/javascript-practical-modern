// 透過 var 進行變數宣告
// 即使建立多重區塊 {}，仍為無限制的語法作用域 (lexical scoping)
{{{{{ var deep = 'This is available from outer scope.'; }}}}}
console.log(deep)
// <- 'This is available from outer scope.'

/*
var 的缺點:
- 存取內層變數某種程度是違背程式的封裝 (encapsulation) 原則
- 內層變數完全不屬於外層的作用域
- 該區塊有許多的兄弟區塊也想要使用相同的變數名稱
- 父區塊已經具有需使用的變數，但在子區塊仍適合使用相同名稱的變數
 */


// 建立區塊作用域:
// var + 巢狀 function
// let + {}
let topMost = {}
{
  let inner = {}
  {
    let innerMost = {}
  }
  // 在此處存取 innerMost 會拋出錯誤
}
// 在此處存取 inner 會拋出錯誤
// 在此處存取 innerMost 會拋出錯誤


// 透過 let 將變數作用域限制在迴圈內
for (let i = 0; i < 2; i++) {
  console.log(i)
  // <- 0
  // <- 1
}
// console.log(i)
// <- ReferenceError: i 尚未定義


function printNumbers () {
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 100)
  }
}

printNumbers()
// i 的作用域為 printNumbers 函式
// 每次執行回呼函式時，已遞增至 10
// <- 10次 10

function printNumbers () {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 100)
  }
}

printNumbers()
// i 的作用於為迴圈內的區塊作用域
// 迴圈每次遞增變數值時，都會建立新的變數繫結
// 0 ~ 9
