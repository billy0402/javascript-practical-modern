// 簡化 物件特性 與 作用域的繫結名稱 重複
const unitPrice = 1.25
const tomato = {
  name: 'Tomato',
  color: 'red',
  unitPrice
}

// 解構賦值
function getGroceryModel ({ name, unitPrice }, units) {
  return {
    name,
    unitPrice,
    units,
    totalPrice: unitPrice * units
  }
}

// model 的用途不明確
const model = getGroceryModel(tomato, 4)
/*
{
  name: 'Tomato',
  unitPrice: 1.25,
  units: 4,
  totalPrice: 5
}
 */
// 僅取得需求的資訊更易懂
const { name, totalPrice } = getGroceryModel(tomato, 4)


// 取得物件的多個特性
const summary = `${model.units}x ${model.name} ($${model.unitPrice}) = $${model.totalPrice}`
// <- 4x Tomato ($undefined) = $5

// 透過解構賦值避免重複撰寫物件名稱
const { name, units, unitPrice, totalPrice } = model
const summary = `${units}x ${name} ($${unitPrice}) = $${totalPrice}`
// <- 4x Tomato ($undefined) = $5


// 只有單一參考指向單一特性時，解構賦值反而會造成混淆
const { name } = model
const summary = `This is a ${name} summary`
// <- This is a Tomato summary

// 直接取用特性更容易理解
const summary = `This is a ${model.name} summary`
// <- This is a Tomato summary


// 需要兩個物件特性
const summary = `This is a summary for ${model.units}x ${model.name}`
// <- This is a summary for 4x Tomato

// 解構賦值減少了重複的物件名稱，並明確指出要使用的物件特性
const { name, units } = model
const summary = `This is a summary for ${units}x ${name}`
// <- This is a summary for 4x Tomato


// 重複參考至同一個特性
const { name } = model
const summary = `This is a ${name} summary`
// <- This is a Tomato summary
const description = `${name} is a grocery item`
// <- Tomato is a grocery item
