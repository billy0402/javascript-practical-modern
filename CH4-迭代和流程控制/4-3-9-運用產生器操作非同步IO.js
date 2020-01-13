function saveProducts (productList) {
  const products = []
  const g = productList()
  return more(g.next())

  // 非同步的遞迴函式
  function more (item) {
    if (item.done) {
      return save(item.value)
    }

    return detail(item.value)
  }

  function detail (endpoint) {
    return fetch(endpoint)
      .then(res => res.json())
      .then(product => {
        products.push(product)
        return more(g.next(product))
      })
  }

  function save (endpoint) {
    return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ products })
    })
      .then(res => res.json())
  }
}

saveProducts(function * () {
  // 輸入
  yield '/products/modern-javascript'
  yield '/products/mastering-modular-javascript'

  if (addToCart) {
    return '/cart'
  }

  // 輸出
  return '/wishlists/books' // 回傳 Promise
}).then(res => {
  // 在完成儲存產品願望清單後繼續執行
})
