async function concurrent () {
  const p1 = new Promise(resolve =>
    setTimeout(resolve, 500, 'fast')
  )
  const p2 = new Promise(resolve =>
    setTimeout(resolve, 200, 'faster')
  )
  const p3 = new Promise(resolve =>
    setTimeout(resolve, 100, 'fastest')
  )

  // const r1 = await p1 // 運作會暫停，直到 p1 已確認狀態
  // const r2 = await p2
  // const r3 = await p3

  // 非同步執行，全部完成時回傳
  const [r1, r2, r3] = await Promise.all([p1, p2, p3])
  console.log(r1, r2, r3)
  // <- 'fast faster fastest'

  // 非同步執行，最先完成者回傳
  const result = await Promise.race([p1, p2, p3])
  console.log(result)
  // <- 'fastest'
}

concurrent()
