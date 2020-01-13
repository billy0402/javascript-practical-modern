// 定期進行資源擷取
// 非同步產生器
async function * fetchInterval (duration, ...params) {
  for await (const i of interval(duration)) {
    yield await fetch(...params)
  }
}

async function process () {
  for await (const response of fetchInterval(
    1000,
    'api/status'
  )) {
    const data = await response.json()
    // 使用最新的資料
  }
}

process() // 無限迴圈
