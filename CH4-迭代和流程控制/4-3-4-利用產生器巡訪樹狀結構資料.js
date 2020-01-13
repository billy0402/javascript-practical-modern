class Node {
  constructor (value, ...children) {
    this.value = value
    this.children = children
  }
}

const root = new Node(1,
  new Node(2),
  new Node(3,
    new Node(4,
      new Node(5,
        new Node(6)
      ), new Node(7)
    )
  ),
  new Node(8,
    new Node(9),
    new Node(10)
  )
)

// 深度優先搜尋 (depth-first search)
// 訪問至樹狀結構最深處後，才會移動至節點串列的其他節點
function * depthFirst (node) {
  // 根節點
  yield node.value

  for (const child of node.children) {
    // 利用 yield* 實作 迭代器的遞迴模組
    // 遞迴巡訪目前節點的子節點
    yield * depthFirst(child)
  }
}

console.log([...depthFirst(root)])
// <- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 將產生器函式合併至 class
class Node {
  constructor (value, ...children) {
    this.value = value
    this.children = children
  }

  * [Symbol.iterator] () {
    yield this.value

    for (const child of this.children) {
      yield * child
    }
  }
}

console.log([...root])
// <- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 廣度優先搜尋 (breadth-first search)
// 將該指定階層的節點訪問完畢後，才會移動至下一個階層
class Node {
  constructor (value, ...children) {
    this.value = value
    this.children = children
  }

  * [Symbol.iterator] () {
    // 先進先出的佇列 (first-in first-out queue)
    // 作為尚未造訪的節點暫存區，初始值為跟節點
    const queue = [this]

    while (queue.length) {
      // 取出目前節點
      const node = queue.shift()
      yield node.value
      // 將子節點放入佇列尾端
      queue.push(...node.children)
    }
  }
}

console.log([...root])
// <- [1, 2, 3, 8, 4, 9, 10, 5, 7, 6]
