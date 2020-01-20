// String#padStart 從頭補足
'01.23'.padStart(5)
// <- '01.23'，字串已符合需求長度，直接回傳
'1.23'.padStart(5, '0')
// <- '01.23'，字串使用 '0' 補位，預設為 ' '
'1.23'.padStart(7, '0')
// <- '0001.23'，字串會一直補足直到符合需求長度為止
'1.23'.padStart(7, 'abcdef')
// <- 'abc1.23'，補位字串過長會被直接截斷
'1.23'.padStart(3, 'abcdef')
// <- '1.23'，原始字串過長則不做任何動作


// String#padEnd 從尾補足
'01.23'.padEnd(5) // <- '01.23'
'1.23'.padEnd(5, '0') // <- '1.230'
'1.23'.padEnd(7, '0') // <- '1.23000'
'1.23'.padEnd(7, 'abcdef') // <- '1.23abc'
'1.23'.padEnd(3, 'abcdef') // <- '1.23'


// String#trimStart 從頭刪除空白
'   this should be left-aligned   '.trimStart()
// <- 'this should be left-aligned   '
// String#trimEnd 從尾刪除空白
'   this should be right-aligned   '.trimEnd()
// <- '   this should be right-aligned'
