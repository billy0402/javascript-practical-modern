// 將字串重複 count 次
'ha'.repeat(1)
// <- 'ha'
'ha'.repeat(2)
// <- 'haha'
'ha'.repeat(5)
// <- 'hahahahaha'
'ha'.repeat(0)
// <- ''

// count 必須為大於 0 且有限的數值
// 'ha'.repeat(Infinity)
// <- RangeError
// 'ha'.repeat(-1)
// <- RangeError

// count 為浮點數會自動無條件捨去至整數位
'ha'.repeat(3.9)
// <- 'hahaha'，count 向下捨去，取整數 3

// count 傳入 NaN 會被轉譯為 0
'ha'.repeat(NaN)
// <- ''

// count 為非數值時，會強制轉為數值
'ha'.repeat('ha')
// <- ''，Number('ha') 是 NaN
'ha'.repeat('3')
// <- 'hahaha'，Number('3') 是 3


// (-1, 0) 之間的值會取 -0，演算法為 ToInteger
function ToInteger (number) {
  return Math.floor(Math.abs(number)) * Math.sign(number)
}

'na'.repeat(-0.1)
// <- ''，count 會被捨去小數位取整為 -0
'na'.repeat(-0.9)
// <- ''，count 會被捨去小數位取整為 -0
'na'.repeat(-0.9999)
// <- ''，count 會被捨去小數位取整為 -0
// 'na'.repeat(-1)
// <- RangeError: 無效的 count 值，[-1, -Infinity] 為範圍之外


// 典型案例: 補足字串長度的功能函式
function indent (text, spaces = 2) {
  return text
    .split('\n')
    .map(line => ' '.repeat(spaces) + line)
    .join('\n')
}

indent(`a
b
c`, 2)
/*
  a
  b
  c
 */
