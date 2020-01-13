/*
Promise 狀態:
暫停 (pending)
已實現 (fulfilled)
已拒絕 (rejected)
 */


fetch('https://www.youtube.com')
  .then(() => fetch('https://www.youtube.com/feed/trending'))
  .then(() => console.log('done'))
// <- 'done'


fetch('/items')
  .then(res => res.json()) // 解析回傳的 json
  .then(items => fetch(`/item/${items[0].slug}`))
  .then(res => res.json())
  .then(item => console.log(item))


Promise
  .resolve([1, 2, 3])
  .then(values => values.map(value => value * 2)) // 回應 Promise 物件
  .then(values => console.log(values)) // 回應 Thenable 物件
// <- [ 2, 4, 6 ]
