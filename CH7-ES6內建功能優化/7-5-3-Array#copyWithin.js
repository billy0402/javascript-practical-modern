// Array#copyWith: 複製一個陣列實體範圍 [start, end) 到 target 位置，再回傳實體本身
// Array.prototype.copyWithin(target, start = 0, end = this.length)

const items = [1, 2, 3, , , , , , , ,]
// <- [ 1, 2, 3, <7 empty items> ]
items.copyWithin(6, 1, 3)
// <- [ 1, 2, 3, <3 empty items>, 2, 3, <2 empty items> ]


// 拆解 Array#copyWith 動作
const items = [1, 2, 3, , , , , , , ,]
// 1. 複製 1 ~ 3
const copy = items.slice(1, 3)
// <- [ 2, 3 ]
// 2. 在 6 貼上，Array#splice 實際上是先刪除資料，再插入 items
items.splice(6, 3 - 1, ...copy)
// <- [ 1, 2, 3, <3 empty items>, 2, 3, <2 empty items> ]


// 實作 Array#copyWith
function copyWithin (
  items,
  target,
  start = 0,
  end = items.length
) {
  const copy = items.slice(start, end)
  const removed = end - start
  items.splice(target, removed, ...copy)

  return items
}

const items = [1, 2, 3, , , , , , , ,]
copyWithin(items, 6, 1, 3)
// <- [ 1, 2, 3, <3 empty items>, 2, 3, <2 empty items> ]
