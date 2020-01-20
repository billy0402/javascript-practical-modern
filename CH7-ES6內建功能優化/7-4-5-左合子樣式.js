// 右合子樣式 (lookbehind assertions) (?=...)
// 測試檔案名稱是否由一連串字母接著 .js 所組成
function getJavaScriptFilename (input) {
  const rFile = /^(?<filename>[a-z]+)(?=\.js)\.[a-z]+$/u
  const match = rFile.exec(input)

  if (match === null) {
    return null
  }

  // 回傳檔名名稱，但不含 .js 副檔名
  return match.groups.filename
}

getJavaScriptFilename('index.js') // <- 'index'
getJavaScriptFilename('index.php') // <- null


// 右不合子樣式 (negative lookbehind assertions) (?!...)
// 測試檔案名稱是否由一連串字母不接著 .js 所組成
function getNonJavaScriptFilename (input) {
  const rFile = /^(?<filename>[a-z]+)(?!\.js)\.[a-z]+$/u
  const match = rFile.exec(input)

  if (match === null) {
    return null
  }

  return match.groups.filename
}

getNonJavaScriptFilename('index.js') // <- null
getNonJavaScriptFilename('index.php') // <- 'index'


// 左合子樣式 (?<=...)
// 比對美元的數值
function getDollarAmount (input) {
  const rDollars = /^(?<=\$)(?<amount>\d+(?:\.\d+)?)$/u
  const match = rDollars.exec(input)

  if (match === null) {
    return null
  }

  return match.groups.amount
}

getDollarAmount('$12.34') // <- '12.34'
getDollarAmount('€12.34') // <- null


// 左不合子樣式 (?<!...)
// 比對非美元的數值
function getNonDollarAmount (input) {
  const rDollars = /^(?<!\$)(?<amount>\d+(?:\.\d+)?)$/u
  const match = rDollars.exec(input)

  if (match === null) {
    return null
  }

  return match.groups.amount
}

getNonDollarAmount('$12.34') // <- null
getNonDollarAmount('€12.34') // <- '12.34'
