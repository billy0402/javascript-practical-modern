// 一系列的功能預設值
const defaults = {
  scripts: false,
  iframes: false,
  highlightSyntax: true
}

// 利用解構賦值作為 options 參數的預設值
// 無論選項是否使用，均須提供設定值
function md (input, options = defaults) {
}

function md (input, options) {
  // 先將預設值複製，再將設定值覆蓋上去
  const config = Object.assign({}, defaults, options)
}


const defaults = {
  first: 'first',
  second: 'second'
}

function applyDefaults (options) {
  // Object.assign(target, ...sources) 會將 sources 逐一套用至 target
  // 通常第一個參數為空物件，避免 defaults 直接被修改
  return Object.assign({}, defaults, options)
}

applyDefaults()
// <- { first: 'first', second: 'second' }
applyDefaults({ third: 3 })
// <- { first: 'first', second: 'second', third: 3 }
applyDefaults({ second: false })
// <- { first: 'first', second: false }


const defaults = {
  [Symbol('currency')]: 'USD'
}
const options = {
  price: '0.99'
}
Object.defineProperty(options, 'name', {
  value: 'Espresso Shot',
  // Object.assign 僅會將可列舉的 (enumerable) 特性視為有效
  // 包含字串和符號的特性
  enumerable: false
})
console.log(Object.assign({}, defaults, options))
// <- { price: '0.99', [Symbol(currency)]: 'USD' }


// 指定值太過複雜時，非以遞迴方式，而是直接指派給 target
Object.assign({}, { a: { b: 'c', d: 'e' } }, { a: { f: 'g' } })
// <- { a: { f: 'g' } }

// 陣列也一樣
Object.assign({}, { a: [['b', 'c', 'd']] }, { a: ['e', 'f'] })
// <- { a: [ 'e', 'f' ] }


// 將物件展開 (spread) 至另一個物件
const grocery = { ...details }
Object.assign({}, details)
const grocery = { type: 'fruit', ...details }
// Object.assign({ type: 'fruit' }, details)
const grocery = { type: 'fruit', ...details, ...fruit }
// Object.assign({ type: 'fruit' }, details, fruit)
const grocery = {
  type: 'fruit', ...details,
  color: 'red'
}
// Object.assign({ type: 'fruit' }, details, { color: 'red' })


// 物件其餘特性 (object rest properties)
const getUnknownProperties = ({ name, type, ...unknown }) => unknown
getUnknownProperties({
  name: 'Carrot',
  type: 'vegetable',
  color: 'orange'
})
// <- { color: 'orange' }


// 在變數宣告時，對物件進行解構
const { name, type, ...meta } = {
  name: 'Carrot',
  type: 'vegetable',
  color: 'orange'
}
// <- name = 'Carrot'
// <- type = 'vegetable'
// <- meta = { color: 'orange' }
