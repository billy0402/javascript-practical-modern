// 發生錯誤時，透過.catch 捕捉錯誤呼叫 reject 後，會進入已拒絕狀態
new Promise(((resolve, reject) => reject(new Error('oops'))))
  .catch(err => console.log(err))
// <- Error: oops

// 拋出錯誤時，也會進入已拒絕狀態
new Promise((resolve, reject) => {
  throw new Error('oops')
})
  .catch(err => console.log(err))
// <- Error: oops

// 回應時發生錯誤時，也會進入已拒絕狀態
Promise
  .resolve(2)
  .then(x => {
    throw new Error('failed')
  })
  .catch(err => console.log(err))
// <- Error: failed

// 將上面的鏈結方法拆成多個變數表示
const p1 = Promise.resolve(2)
const p2 = p1.then(x => {
  throw new Error('failed')
}) // 已拒絕狀態
const p3 = p2.catch(err => console.log(err)) // 捕捉到拒絕
// <- Error: failed


const p1 = Promise.resolve(2)
const p2 = p1.then(x => {
  throw new Error('failed')
}) // 已拒絕狀態
const p3 = p2.then(x => x * 2) // 已拒絕狀態
const p4 = p3.catch(err => console.log(err)) // 捕捉到拒絕
// <- Error: failed

const p1 = Promise.resolve(2)
const p2 = p1.then(x => {
  throw new Error('failed')
}) // 已拒絕狀態
const p3 = p2.catch(err => console.log(err)) // 捕捉到拒絕，已實現狀態
// <- Error: failed
const p4 = p3.then(() => console.log('crisis averted')) // 捕捉到實現
// <- crisis averted

const p1 = Promise.resolve(2)
const p2 = p1.then(x => {
  throw new Error('failed')
}) // 已拒絕狀態
const p3 = p2.catch(err => {
  throw new Error('oops')
}) // 捕捉到拒絕，再拋出錯誤
const p4 = p3.catch(err => console.log(err)) // 捕捉到錯誤
// <- Error: oops


const url = 'https://www.google.com.tw'
fetch(url)
  .then(res => res.a.prop.that.does.not.exist)
  .catch(err => console.error('1' + err.message)) // 錯誤已發生
  // <- undefined is not an object (evaluating 'res.a.prop')
  .catch(err => console.error('2' + err.message)) // 錯誤未發生

const p = fetch(url)
  .then(res => res.a.prop.that.does.not.exist)
p.catch(err => console.error(err.message)) // 捕捉到 p 的錯誤 (分支 1)
// <- undefined is not an object (evaluating 'res.a.prop')
p.catch(err => console.error(err.message)) // 捕捉到 p 的錯誤 (分支 2)
// <- undefined is not an object (evaluating 'res.a.prop')

const p1 = fetch(url)
const p2 = p1.then(res => res.a.prop.that.does.not.exist) // 拋出錯誤，已拒絕狀態
const p3 = p2.catch(err => {
}) // 捕捉到錯誤，已實現狀態
const p4 = p3.catch(err => console.error(err.message)) // 忽略不執行
