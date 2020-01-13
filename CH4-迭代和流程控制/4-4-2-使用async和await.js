async function read () {
  const model = await getRandomArticle() // 4-4-1 的第一個函式
  const html = await renderView(model)
  await setPageContents(html)
  return 'Successfully change page!'
}

// 一定會回傳 Promise 物件 (已實現/已拒絕)
read()
  .then(message => console.log(message))
  .catch(err => console.error(err))


// 增加 read 再利用性，專注在擷取頁面
async function read () {
  const model = await getRandomArticle() // 4-4-1 的第一個函式
  const html = await renderView(model)
  return html
}

async function write () {
  const html = await read()
  console.log(html)
}
