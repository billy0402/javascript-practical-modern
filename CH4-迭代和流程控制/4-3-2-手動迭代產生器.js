const g = numbers()
while (true) {
  const item = g.next()

  if (item.done) {
    break
  }

  console.log(item.value)
}


/*
四種暫停產生器的事件:
- yield:  回傳序列中的下一個值
- return: 回傳序列中的最後一個值
- throw:  完全終止產生器的執行
- 當函式不明確地回傳 undefined: 表示已觸及產生器函式的結束訊息 { done:true }
 */

function * generator () {
  yield 'only'
}

const g = generator()
console.log(g.next())
// <- { value: 'only', done: false }
console.log(g.next())
// <- { value: undefined, done: true }
// 在已訪問至結束端時，重複呼叫 .next，只會回傳 { done:true }
// 等冪性 (idempotence): 重複執行均取得相同的結果
console.log(g.next())
// <- { value: undefined, done: true }
