// ES5
var expertise = 'journalism'
var person = {
  name: 'Sharon',
  age: 27
}
person[expertise] = {
  years: 5,
  interests: ['international', 'politics', 'internet']
}


var expertise = 'journalism'
var person = {
  name: 'Sharon',
  age: 27,
  [expertise]: {
    years: 5,
    interests: ['international', 'politics', 'internet']
  }
}


// 特性值指定簡化語法 + 運算取得的特性名稱 (無法結合使用)
// var expertise = 'journalism'
// var journalism = {
//   years: 5,
//   interests: ['international', 'politics', 'internet']
// }
// var person = {
//   name: 'Sharon',
//   age: 27,
//   [expertise] // 語法錯誤
// }


var grocery = {
  id: 'bananas',
  name: 'Bananas',
  units: 6,
  price: 10,
  currency: 'USD'
}
var groceries = {
  [grocery.id]: grocery
}


// ES5
function getEnvelope (type, description) {
  var envelope = {
    data: {}
  }
  envelope[type] = description
  return envelope
}


function getEnvelope (type, description) {
  return {
    data: {},
    [type]: description
  }
}
