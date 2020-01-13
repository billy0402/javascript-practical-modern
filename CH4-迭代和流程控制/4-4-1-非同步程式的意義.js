function getRandomArticle () {
  return fetch('/articles/random', {
    headers: new Headers({
      Accept: 'application/json'
    })
  })
    .then(res => res.json())
}

getRandomArticle()
  .then(model => renderView(model)) // 畫面描繪
  .then(html => setPageContents(html)) // 更新頁面
  .then(() => console.log('Successfully change page!'))
  .catch(err => console.error(err))


// 改用回呼函式 (回呼地獄)
getRandomArticle((err, model) => {
  if (err) {
    return console.error(err)
  }

  renderView(model, (err, html) => {
    if (err) {
      return console.error(err)
    }

    setPageContents(html, err => {
      if (err) {
        return console.error(err)
      }

      console.log('Successfully change page!')
    })
  })
})


// 改用函式庫
async.waterfall([
  getRandomArticle,
  renderView,
  setPageContents
], (err, html) => {
  if (err) {
    return console.error(err)
  }

  console.log('Successfully change page!')
})


// 用產生器重構
function getRandomArticle (gen) {
  const g = gen()

  fetch('/articles/random', {
    headers: new Headers({
      Accept: 'application/json'
    })
  })
    .then(res => res.json())
    .then(json => g.next(json))
    .catch(err => g.throw(err))
}

getRandomArticle(function * printRandomArticle () {
  const json = yield
  // render view
})
