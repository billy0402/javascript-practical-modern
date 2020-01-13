// 色彩名稱 和 RGB色碼 映射
const colors = {
  green: '#0E0',
  orange: '#F50',
  pink: '#E07',
  [Symbol.iterator] () {
    const keys = Object.keys(colors)
    return {
      next () {
        const done = keys.length === 0
        const key = keys.shift()
        return {
          done,
          value: [key, colors[key]]
        }
      }
    }
  }
}
console.log([...colors])
// <- [ [ 'green', '#0E0' ], [ 'orange', '#F50' ], [ 'pink', '#E07' ] ]


// 抽離鍵值配對的迭代器邏輯
function keyValueIterable (target) {
  target[Symbol.iterator] = function () {
    const keys = Object.keys(target)
    return {
      next () {
        const done = keys.length === 0
        const key = keys.shift()
        return {
          done,
          value: [key, colors[key]]
        }
      }
    }
  }
  return target
}

const colors = keyValueIterable({
  green: '#0E0',
  orange: '#F50',
  pink: '#E07'
})
for (const [name, color] of colors) {
  console.log(`${name}: ${color}`)
  // <- green: #0E0
  // <- orange: #F50
  // <- pink: #E07
}
