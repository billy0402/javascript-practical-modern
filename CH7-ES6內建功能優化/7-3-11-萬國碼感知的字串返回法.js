// 將每個編碼單元進行字串返回時，需要對編碼點返回才能取得正確結果
const text = '\ud83d\udc0e\ud83d\udc71\u2764'
text.split('').map(cp => cp.codePointAt(0))
// <- [ 55357, 56334, 55357, 56433, 10084 ]
text.split('').reverse().map(cp => cp.codePointAt(0))
// <- [ 10084, 56433, 55357, 56334, 55357 ]


// 應該先用展開運算子將字串以編碼點進行切割後，再進行字串返回，不會將編碼點破壞
const text = '\ud83d\udc0e\ud83d\udc71\u2764'
console.log([...text].reverse().join(''))
// <- '❤👱🐎'

// 無法適用於所有的自行符號叢集
console.log([...'hello\u0305'].reverse().join(''))
// <- ' ̅olleh'
