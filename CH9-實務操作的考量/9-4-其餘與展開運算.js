function getNumberParts (number) {
  const rNumber = /(\d+)\.(\d+)/
  const matches = number.match(rNumber)

  if (matches === null) {
    return null
  }

  // 解構賦值只取得需要的部分
  const [, integer, fractional] = matches

  return {
    integer, // 整數部分
    fractional // 小數部分
  }
}

getNumberParts('1234.56')
// <- { integer: '1234', fractional: '56' }


function getNumberParts (number) {
  const rNumber = /(\d+)\.(\d+)/
  const matches = number.match(rNumber)

  if (matches === null) {
    return null
  }

  // 展開運算子擷取所有匹配群組
  const [, ...captures] = matches

  return captures
}

getNumberParts('1234.56')
// <- [ '1234', '56' ]


// 使用展開運算子改善 .concat 的可讀性
console.log(administrators.concat(moderators))
console.log([...administrators, ...moderators])
console.log([...administrators, ...moderators, bob])


// 基本的預設值 + 使用者提供的 options + 一些重要的覆寫特性 (修改已設定的特性)
const defaults = {
  speed: 1,
  type: 'sports'
}
const options = {
  speed: 3,
  important: false
}
// 運用 Object.assign 延伸物件，透過物件展開，將多個物件合併為一個新物件
Object.assign({}, defaults, options, { important: true })
// <- { speed: 3, type: 'sports', important: true }

// 使用展開運算子改善 Object.assign 的可讀性
const object = {
  ...defaults,
  ...options,
  important: true
}
// <- { speed: 3, type: 'sports', important: true }


// 建立新物件而非修改原本的物件
const player = {
  strength: 4,
  luck: 2,
  mana: 80,
  health: 10
}
// 使用 40 個 mana 點數，補充 110 點健康點數
const castHealingSpell = player => ({
  ...player,
  mana: player.mana - 40,
  health: player.health + 110
})
const newPlayer = castHealingSpell(player)
console.log(player)
// <- { strength: 4, luck: 2, mana: 80, health: 10 }
console.log(newPlayer)
// <- { strength: 4, luck: 2, mana: 40, health: 120 }


// 建立物件的淺層複製 (shallow copy)
const copy = Object.assign({}, source) // 將物件特性指派給空物件
const copy = { ...source } // 展開物件
const { ...copy } = source // 解構其餘參數


// 建立物件複本，但省略部分特性
// 透過解構賦值，取得 name 以外的其餘參數 (描述資料)
const { name, ...metadata } = person

// 將個人資料的串列映射，排除姓名. 社會安全碼，並取得其餘參數
people.map(({ name, ssn, ...person }) => person)
