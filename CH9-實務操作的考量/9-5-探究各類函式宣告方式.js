// 函式宣告不會被提升 (hoisted)，不需要依照被執行順序排列
printSum(2, 3)
// <- 'printing: 5'

function printSum (x, y) {
  return print(sum(x, y))
}

function sum (x, y) {
  return x + y
}

function print (message) {
  console.log(`printing: ${message}`)
}


// 函式運算式必須在執行之前，先指派給變數，才能使用
// 最好以 LIFO (last-in-first-out) 堆疊方式排序，但可讀性較差
var sum = function (x, y) {
  return x + y
}
var print = function (message) {
  console.log(`printing: ${message}`)
}
var printSum = function (x, y) {
  return print(sum(x, y))
}
printSum(2, 3)


// 函式運算式可以指定名稱給遞迴使用，但外部作用域無法存取
var sumMany = function sum (accumulator = 0, ...values) {
  if (values.length === 0) {
    return accumulator
  }

  const [value, ...rest] = values
  return sum(accumulator + value, ...rest)
}
console.log(sumMany(0, 1, 2, 3, 4))
// <- 10
console.log(sum())
// <- ReferenceError: sum 未被定義


// 箭頭函式
// 在區塊敘述中回傳運算結果
const sum = (x, y) => {
  return x + y
}
// 省略 return，隱性回傳結果
const multiply = (x, y) => x * y
// 單一參數省略小括號
const double = x => x * 2
// 使用大括號區塊，但不回傳值
const print = x => {
  console.log(x)
}

// 隱性回傳陣列
const makeArray = (first, second) => [first, second]
// 捨棄第一個參數，回傳剩餘參數陣列
const makeSlice = (discarded, ...items) => items

// 隱性回傳物件，必須加上小括號標示
const getPerson = name => ({
  name: 'Nico'
})


// 撰寫測次案例. 傳遞給 new Promise() 物件. setTimeout 函式. 陣列映射函式
// 會選擇使用匿名函式運算式，沒有使用箭頭函式的必要
wait(5000)
  .then(function () {
    console.log('waited 5 seconds!')
  })

function wait (delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, delay)
  })
}


// 改用箭頭函式增加可讀性
wait(5000)
  .then(function () {
    console.log('waited 5 seconds!')
  })

function wait (delay) {
  return new Promise(resolve =>
    setTimeout(() => resolve(), delay)
  )
}


// 箭頭函式的語法作用域，不會變更 this 或 arguments 的內容
const pistol = {
  caliber: 50,
  trigger () {
    const self = this
    setTimeout(function () {
      console.log(`Fired caliber ${self.caliber} pistol`)
    }, 1000)
  }
}
pistol.trigger()
// <- Fired caliber undefined pistol


// 改用箭頭函式，移除暫存變數，直接取值
const pistol = {
  caliber: 50,
  trigger () {
    setTimeout(() => {
      console.log(`Fired caliber ${this.caliber} pistol`)
    }, 1000)
  }
}
pistol.trigger()


/*
預設將所有的函式使用函式宣告。
如果函式不需要有意義的名稱.不需要多行程式碼.不需要遞迴時，可以考慮使用箭頭函式。
 */
