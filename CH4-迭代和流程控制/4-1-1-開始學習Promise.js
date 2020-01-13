// https://mjavascript.com/out/promisees
const url = 'https://www.google.com.tw'
const p = fetch(url)

// 1
// .then(fulfillment, rejection)
p.then(res => {
  // 處理回應
})
// .catch(rejection)
p.catch(err => {
  // 處理錯誤
})

// 2
p.then(
  res => {
    // 處理回應
  },
  err => {
    // 處理錯誤
  }
)

// 3
p.then(res => {
  // 處理回應
})
// .then(null, rejection)
p.then(null, err => {
  // 處理錯誤
})


// 以 Promise 作為回呼函式與事件的替代方案
// 單一回呼函式處理所有回覆情況
fetch(url, (err, res) => {
  if (err) {
    // 處理錯誤
  } else {
    // 處理回應
  }
})

// 事件驅動對應的處理函式
fetch(url)
  .on('error', err => {
    // 處理錯誤
  })
  .on('data', res => {
    // 處理回應
  })


// 實作建立 Promise 物件
new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() > 0.5) {
      // 已實現狀態 (fulfillment)
      resolve('random success')
    } else {
      // 已拒絕狀態 (rejection)
      reject(new Error('random failure'))
    }
  }, 1000)
})


// 利用 Promise.resolve or Promise.reject 建立 Promise 物件
Promise
  .resolve({ result: 123 })
  .then(data => console.log(data.result))
// <- 123

// 一個回應會回傳一個值
Promise
  .resolve(2)
  .then(x => x * 7)
  .then(x => x - 3)
  .then(x => console.log(x))
// <- 11

// 一個回應也會回傳一個 Promise 物件
Promise
  .resolve(2)
  // 需等待兩秒才會回應
  .then(x => new Promise(function (resolve) {
    setTimeout(() => resolve(x * 1000), x * 1000)
  }))
  .then(x => console.log(x))
// <- 2000

// 一個回應也可能會拋出錯誤
const p = fetch(url)
  .then(res => {
    throw new Error('unexpectedly')
  })
  .catch(err => console.log(err))
// <- Error: unexpectedly
