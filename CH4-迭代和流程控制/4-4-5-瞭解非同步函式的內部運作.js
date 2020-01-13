function spawn (generator) {
  // 將所有項目包在一個 promise 物件中
  return new Promise(((resolve, reject) => {
    const g = generator()

    // 執行第一個步驟
    step(() => g.next())

    function step (nextFn) {
      const next = runNext(nextFn)

      if (next.done) {
        // 若成功結束，則將 promise 物件完成解析
        resolve(next.value)
        return
      }

      // 若尚未結束，則將出產的 promise 物件連結，並執行下一個步驟
      Promise
        .resolve(next.value)
        .then(
          value => step(() => g.next(value)),
          err => step(() => g.throw(err))
        )
    }

    function runNext (nextFn) {
      try {
        // 恢復產生器運行
        return nextFn()
      } catch (e) {
        // 以失敗結束，則拒絕 promise 物件
        reject(e)
      }
    }
  }))
}

// 非同步函式
async function exercise () {
  const r1 = await new Promise(resolve =>
    setTimeout(resolve, 500, 'slowest')
  )
  const r2 = await new Promise(resolve =>
    setTimeout(resolve, 200, 'slow')
  )

  return [r1, r2]
}

exercise()
  .then(result => console.log(result))
// <- [ 'slowest', 'slow' ]

// 轉為傳統 function
function exercise () {
  return spawn(function * () {
    const r1 = yield new Promise(resolve =>
      setTimeout(resolve, 500, 'slowest')
    )
    const r2 = yield new Promise(resolve =>
      setTimeout(resolve, 200, 'slow')
    )

    return [r1, r2]
  })
}

exercise()
  .then(result => console.log(result))
// <- [ 'slowest', 'slow' ]


// 非同步函式
async function getUserProfiles () {
  const users = await findAllUsers()
  const models = await Promise.all(users.map(toUserModel))
  const profiles = models.map(model => model.profile)

  return profiles
}

// 轉為傳統 function
function getUserProfiles () {
  const userPromise = findAllUsers()
  const modelPromise = userPromise
    .then(users =>
      Promise.all(users.map(toUserModel))
    )
  const profilePromise = modelPromise
    .then(models =>
      models.map(model => model.profile)
    )

  return profilePromise
}
