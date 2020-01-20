// 盡可能使用 const 敘述，因為不需要考慮太多可能發生的情況
if (condition) {
  // 在宣告敘述之前，無法存取 isReady
  const isReady = ture
  // isReady 繫結無法被重新指派
}
// 無法存取 isReady，因為位於包含該繫結區塊作用域之外


// 如果變數可能被重新指派，則改使用 let
// 例: 累加計數. 變更布林旗標. 進行初始化
function prettySize (input) {
  let value = input
  let unit = 'MB'

  if (value >= 1024) {
    value /= 1024
    unit = 'GB'
  }

  if (value >= 1024) {
    value /= 1024
    unit = 'TB'
  }

  if (value >= 1024) {
    value /= 1024
    unit = 'PB'
  }

  return `${value.toFixed(1)} ${unit}`
}


// Array#concat 以展開運算子代替，較為簡短
const result = [1, 2, 3]
console.log(result.concat(1, 2))
// <- [ 1, 2, 3, 1, 2 ]
console.log([...result, 1, 2])
// <- [ 1, 2, 3, 1, 2 ]


// 重構 (refactoring)
let completionText = 'in progress'
if (completionPercent >= 85) {
  completionText = 'almost done'
} else if (completionPercent >= 70) {
  completionText = 'reticulating splines'
}

// 將文字運算的邏輯抽取出來
const completionText = getCompletionText(completionPercent)

function getCompletionText (progess) {
  if (progess >= 85) {
    return 'almost done'
  }

  if (progess >= 70) {
    return 'reticulating splines'
  }

  return 'in progress'
}
