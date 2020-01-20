function matcher (regex, input) {
  return () => {
    const match = regex.exec(input)
    const lastIndex = regex.lastIndex

    return {
      lastIndex,
      match
    }
  }
}

const input = 'haha haha haha'

// 全域模式
const rGlobal = /ha/g
const nextGlobal = matcher(rGlobal, input)
console.log(nextGlobal()) // <- {lastIndex: 2, match: ["ha"]}
console.log(nextGlobal()) // <- {lastIndex: 4, match: ["ha"]}
console.log(nextGlobal()) // <- {lastIndex: 7, match: ["ha"]}

// 黏著度模式，一定要連續出現，能夠改善效能
const rSticky = /ha/y
const nextSticky = matcher(rSticky, input)
console.log(nextSticky()) // <- {lastIndex: 2, match: ["ha"]}
console.log(nextSticky()) // <- {lastIndex: 4, match: ["ha"]}
console.log(nextSticky()) // <- {lastIndex: 0, match: null}
rSticky.lastIndex = 5 // 強制移動最後比對成功的位置
console.log(nextSticky()) // <- {lastIndex: 7, match: ["ha"]}
