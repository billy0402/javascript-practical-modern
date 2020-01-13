const iterable = [1, 2, 3]
// Symbol.iterator 會使用一個遵循迭代器協議的物件
// 所回傳的迭代器會被運用在取得物件以外的值
const sequence = [...iterable]
console.log(sequence)


// 符號特性無法直接作為物件實字的鍵
// (ES5) 將符號特性加入物件
const example = {}
example[Symbol.iterator] = fn

// 透過運算取得特性名稱，將符號鍵加入物件實字
const example = {
  [Symbol.iterator]: fn
}


// 實作迭代器協議: 將 可迭代物件 轉換成 迭代器物件
const items = ['i', 't', 'e', 'r', 'a', 'b', 'l', 'e']
const sequence = {
  [Symbol.iterator] () {
    let i = 0
    return {
      next () {
        const value = items[i]
        i++
        const done = i > items.length
        return {
          value,
          done
        }
      }
    }
  }
}

// 迭代方法
// (X) forEach. for...in
// (O) for...of. [...iterable]. Array...from
for (const item of sequence) {
  console.log(item)
  // <- i
  // <- t
  // <- e
  // <- r
  // <- a
  // <- b
  // <- l
  // <- e
}


// 可迭代物件
// (built-in) Array. String. function 的 arguments
// (DOM) NodeList
console.log([...sequence])
// <- [ 'i', 't', 'e', 'r', 'a', 'b', 'l', 'e' ]
console.log(Array.from(sequence))
// <- [ 'i', 't', 'e', 'r', 'a', 'b', 'l', 'e' ]
// 將類陣列 (資料項儲存於自零開始的整數特性和具有 length 特性) 轉換成陣列
console.log(Array.from({
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}))
// <- [ 'a', 'b', 'c' ]


// jQuery 和 document.querySelectorAll 均會回傳類陣列
for (const element of $('li')) {
  console.log(element)
  // <- a <li> in the jQuery collection
}
