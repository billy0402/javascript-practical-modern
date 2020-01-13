// 回應已確認狀態，不論已實現或已拒絕
function promiseFinally (p, fn) {
  return p.then(
    fn, // 已實現狀態
    fn  // 已拒絕狀態
  )
}

// 更新版，無法傳入任何引數
// 適用於 例如: 載入中圖示、不需確認值的前置清理動作
function promiseFinally (p, fn) {
  return p.then(
    () => fn(), // 已實現狀態
    () => fn()  // 已拒絕狀態
  )
}


const p1 = Promise.resolve('value')
// 可以解析出父物件的結果
const p2 = p1.finally(() => {
})
const p3 = p2.then(data => console.log(data))
// <- 'value'


const p1 = Promise.resolve('value')
// p.then(fn, fn) 會產生一個新的實現值
// 除非他於回應敘述中有明確地轉送並回傳
const p2 = p1.then(() => {}, () => {})
const p3 = p2.then(data => console.log(data))
// <- undefined


// 將 Promise#finally 與 .then(fn, fn) 相容
function promiseFinally (p, fn) {
  return p.then(
    result => resolve(fn().then(() => result)),
    err => resolve(fn().then(() => Promise.reject(err))
    )
  )
}


const p1 = Promise.resolve('value')
// 傳遞至 finally 的回應是拒絕或拋出例外時
// 那麼 finally 回傳的也會是已拒絕狀態，並附帶拒絕原因
const p2 = p1.finally(() => Promise.reject('oops'))
const p3 = p2.catch(err => console.log(err))
// <- 'oops'
