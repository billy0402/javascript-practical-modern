// 鍵值必須是物件
const map = new WeakMap()
map.set(Date.now, 'now')
// map.set(1, 1)
// <- TypeError
// map.set(Symbol(), 2)
// <- TypeError，Symbol 符號為一種資料型態

// 鍵參考為弱保存 (weakly held):
// 當沒有其他的參考時，鍵所參考的物件會歸入至垃圾集合機制 (garbage collection)
const date = new Date()
// 透過建構子，提供一個鍵值的可迭代物件，初始化 WeakMap
const map = new WeakMap([
  [date, 'foo'],
  [() => 'bar', 'baz']
])
// WeakMap 弱映射為 Map 映射的子集合:
// 缺少迭代相關 API: #entries. #keys. #values. #forEach. #clear
map.has(date)
// <- true
map.get(date)
// <- 'foo'
map.delete(date)
map.has(date)
// <- false
