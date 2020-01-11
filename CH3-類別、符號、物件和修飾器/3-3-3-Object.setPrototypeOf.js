// ES5
const baseCat = {
  type: 'cat',
  legs: 4
}
// Object.create 只能建立一個新的物件
const cat = Object.create(baseCat)
cat.name = 'Milanesita'


const baseCat = {
  type: 'cat',
  legs: 4
}
// Object.setPrototypeOf 可以用來改變物件原型
// 非常耗效能，且應避免修改物件原型
// 建議使用 Object.create 設定需要的物件原型
const cat = Object.setPrototypeOf(
  { name: 'Milanesita' },
  baseCat
)
