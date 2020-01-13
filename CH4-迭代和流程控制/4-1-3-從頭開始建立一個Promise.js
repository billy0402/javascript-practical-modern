// 確認為已實現
new Promise(resolve => resolve('result'))
// 確認為已拒絕
new Promise((resolve, reject) => reject(new Error('reason')))
// 等待後，確認為已實現
new Promise(resolve => setTimeout(resolve, 2000))


// Promise 完成後，結果無法改變
function resolveUnderThreeSeconds (delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay)
    setTimeout(reject, 3000)
  })
}

resolveUnderThreeSeconds(2000) // 2 秒後變為已實現狀態
resolveUnderThreeSeconds(7000) // 7 秒後變為已拒絕狀態


const url = 'https://www.google.com.tw'
// resolve() 除了傳入一般值以外，也能傳入另一個 Promise 物件
// resolve() 會等待內部的 Promise 執行完成後，才會接續執行
new Promise(resolve => resolve(fetch(url)))
// 結果與直接執行 fetch 相同

// 兩者效果相同
new Promise(resolve => resolve(12))
Promise.resolve(12)


// 透過 Promise.resolve 將 Thenable 物件 轉換為 Promise 物件
Promise
  .resolve({ then: resolve => resolve(12) })
  .then(x => console.log(x))
// <- 12


// 確認已拒絕，附帶拒絕原因
Promise.reject('reason')
fetch(url)
  .then(() => {
    throw new Error('arbitrarily')
  })
// 使用 Promise.reject 代替 throw，作為箭頭函式的隱性回傳值
fetch(url)
  .then(() =>
    Promise.reject(new Error('arbitrarily'))
  )
