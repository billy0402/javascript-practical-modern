// 如果不處理例外，迭代會停止執行，避免影響其他 yield 運算式
// 透過 try...catch 處理 yield 拋出的錯誤
modelProvider(function * () {
  try {
    console.log('items in the carts', yield 'cart.items')
  } catch (e) {
    console.error('uh oh, failed to fetch model.cart.items!', e)
  }
  try {
    console.log(`these are our products: ${yield 'products'}`)
  } catch (e) {
    console.error('uh oh, failed to fetch model.products!', e)
  }
})
