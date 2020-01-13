// 同步抓取兩個網頁
fetch('/products/chair')
  .then(res => res.json())
  .then(products => console.log(products))
fetch('/products/table')
  .then(res => res.json())
  .then(products => console.log(products))

// 改用 Promise.all 同步進行
Promise
  .all([
    fetch('/products/chair'),
    fetch('/products/table')
  ])
  .then(products => console.log(products[0], products[1]))

// 解構回傳值
Promise
  .all([
    fetch('/products/chair'),
    fetch('/products/table')
  ])
  .then(([chairs, tables]) => console.log(chairs, tables))


const p1 = Promise.reject('failed')
const p2 = fetch('/products/chair')
const p3 = fetch('/products/table')
// 一發生錯誤後，直接回傳拒絕狀態
const p = Promise
  .all([p1, p2, p3])
  .catch(err => console.log(err))
// <- 'failed'

/*
Promise.all 可能結果:
1. 已實現狀態: 所有物件均為已實現狀態，回傳 results
2. 已拒絕狀態: 其中一物件為已拒絕狀態，回傳 reason
3. 暫停狀態:   至少一物件能為暫停狀態，且尚無物件被拒絕
 */


// Promise.race: 先完成者回傳
Promise
  .race([
    new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000))
  ])
  .then(result => console.log(result))
// <- 1


function timeout (delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject('timeout'), delay)
  })
}

// 被拒絕時也會結束競賽，可避免請求超時
Promise.race([
  fetch('/large-resource-download'),
  timeout(5000)
])
  .then(res => console.log(res))
  .catch(err => console.log(err))
