const model = {
  cart: {
    items: [
      {
        id: 'product1',
        price: 100
      },
      {
        id: 'product2',
        price: 200
      }
    ]
  },
  products: {
    product1: { name: 'product1' },
    product2: { name: 'product2' }
  }
}

// 巡訪產生器以取得序列的所有資料項
function modelProvider (paths) {
  const g = paths()
  pull()

  function pull (data) {
    // 將產生器物件提供的 data 進行運算
    const { value, done } = g.next(data)

    if (done) {
      return
    }

    const crumbs = value.split('.')
    const crumb = crumbs.reduce(followCrumbs, model)
    pull(crumb)
  }
}

function followCrumbs (data, crumb) {
  if (!data || !data.hasOwnProperty(crumb)) {
    return null
  }

  return data[crumb]
}

// 產生器由函式操作迭代行為
modelProvider(function * () {
  const items = yield 'cart.items'
  const item = items.reduce(
    (left, right) => left.price > right.price ? left : right
  )
  const details = yield `products.${item.id}`
  console.log(details)
})
