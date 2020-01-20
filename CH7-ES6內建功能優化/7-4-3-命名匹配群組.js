// 透過 = 分隔，取得鍵值配對
function parseKeyValuePair (input) {
  const rAttribute = /([a-z]+)=([a-z]+)/
  const [, key, value] = rAttribute.exec(input)

  return {
    key,
    value
  }
}

parseKeyValuePair('strong=true')
// <- { key: 'strong', value: 'true' }


// 透過 = 或 is 分隔，取得鍵值配對
function parseKeyValuePair (input) {
  const rAttribute = /([a-z]+)(?:=|\sis\s)([a-z]+)/
  const [, key, value] = rAttribute.exec(input)

  return {
    key,
    value
  }
}

parseKeyValuePair('strong is true')
// <- { key: 'strong', value: 'true' }
parseKeyValuePair('flexible=too')
// <- { key: 'flexible', value: 'too' }


// 使用 (?<groupName>) 為群組命名
function parseKeyValuePair (input) {
  const rAttribute = /(?<key>[a-z]+)(?:=|\sis\s)(?<value>[a-z]+)/
  const { groups } = rAttribute.exec(input)

  return groups
}

parseKeyValuePair('strong is true')
// <- { key: 'strong', value: 'true' }
parseKeyValuePair('flexible=too')
// <- { key: 'flexible', value: 'too' }


// 透過反向參考 (backreference)，檢查帳密是否相同
function hasSameUsernameAndPassword (input) {
  const rDuplicate = /([^:]+):\1/

  return rDuplicate.exec(input) !== null
}

hasSameUsernameAndPassword('root:root') // <- true
hasSameUsernameAndPassword('root:pF6GGlyPhoy1!9i') // <- false


// 命名反向參考 (named backreference)
// \k<groupName>參考 可與 編號參考 (numbered reference) 配合使用
// 但以使用命名參考時，最好避免使用編號參考
function hasSameUsernameAndPassword (input) {
  const rDuplicate = /(?<user>[^:]+):\k<user>/u

  return rDuplicate.exec(input) !== null
}

hasSameUsernameAndPassword('root:root') // <- true
hasSameUsernameAndPassword('root:pF6GGlyPhoy1!9i') // <- false


// 命名群組可傳遞至 String#replace 作為替代字串
// 將美國時間格式的字串轉為匈牙利格式
function americanDateToHungarianFormat (input) {
  const rAmerican = /(?<month>\d{2})\/(?<day>\d{2})\/(?<year>\d{4})/
  const hungarian = input.replace(rAmerican, '$<year>-$<month>-$<day>')

  return hungarian
}

americanDateToHungarianFormat('06/09/1988')
// <- '1988-06-09'


function americanDateToHungarianFormat (input) {
  const rAmerican = /(?<month>\d{2})\/(?<day>\d{2})\/(?<year>\d{4})/
  // 如果第二個引數是函式時，該函式參數為 (match, ...capture, groups)
  const hungarian = input.replace(rAmerican, (...rest) => {
    const groups = rest[rest.length - 1]
    const { month, day, year } = groups

    return `${year}-${month}-${day}` // 改用字串樣板
  })

  return hungarian
}

americanDateToHungarianFormat('06/09/1988')
// <- '1988-06-09'
