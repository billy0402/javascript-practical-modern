// Number.isSafeInteger:  不會自行轉換
// value 為數值且為整數，並位於安全範圍內
Number.isSafeInteger(Infinity) // <- false
Number.isSafeInteger(-Infinity) // <- false
Number.isSafeInteger(NaN) // <- false
Number.isSafeInteger(null) // <- false
Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // <- true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // <- false
Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // <- true
Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // <- false
Number.isSafeInteger('one') // <- false
Number.isSafeInteger('0') // <- false
Number.isSafeInteger(1) // <- true
Number.isSafeInteger(1.2) // <- false


// 確認運算結果是否位於範圍內，除了驗證結果，也必須驗證兩個運算元
Number.isSafeInteger(9007199254740000)
// <- true
Number.isSafeInteger(993)
// <- true
Number.isSafeInteger(9007199254740000 + 993)
// <- false，運算元均位於範圍內，結果卻不正確
9007199254740000 + 993
// <- 9007199254740992，應該是 9007199254740993
9007199254740000 + 994
// <- 9007199254740994，結果超出範圍，結果卻正確

Number.isSafeInteger(9007199254740993)
// <- false
Number.isSafeInteger(990)
// <- true
Number.isSafeInteger(9007199254740993 + 990)
// <- false，運算元其中之一超出範圍，結果不正確
9007199254740993 + 990
// <- 9007199254741982，應該是 9007199254741983

Number.isSafeInteger(9007199254740993)
// <- false
Number.isSafeInteger(990)
// <- true
Number.isSafeInteger(9007199254740993 - 990)
// <- true，結果在範圍之內，結果並不正確
9007199254740993 - 990
// <- 9007199254740002，應該是 9007199254740003

Number.isSafeInteger(9007199254740995)
// <- false
Number.isSafeInteger(9007199254740993)
// <- false
Number.isSafeInteger(9007199254740995 - 9007199254740993)
// <- true，運算元均超出範圍，結果在範圍內，結果並不正確
9007199254740995 - 9007199254740993
// <- 4，應該是 2


// 確認 運算元 與 運算結果 均在範圍內的工具函式
function safeOp (result, ...operands) {
  const value = [result, ...operands]
  if (!value.every(Number.isSafeInteger)) {
    throw new RangeError('Operation can not be trusted')
  }

  return result
}

// safeOp(9007199254740000 + 993, 9007199254740000, 993)
// <- RangeError: Operation can not be trusted
// safeOp(9007199254740993 + 990, 9007199254740993, 990)
// <- RangeError: Operation can not be trusted
// safeOp(9007199254740993 - 990, 9007199254740993, 990)
// <- RangeError: Operation can not be trusted
// safeOp(9007199254740995 - 9007199254740993, 9007199254740995, 9007199254740993)
// <- RangeError: Operation can not be trusted
safeOp(1 + 2, 1, 2)
// <- 3
