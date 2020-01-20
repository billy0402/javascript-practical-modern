/*
嚴格模式 (strict mode):
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Strict_mode
ES6 預設為嚴格模式，
不允許語言中的錯誤部分，並會將一些未說明的隱性錯誤 (silent errors) 轉為拋出清楚說明的顯性例外 (loud exceptions)。

將這些不允許的部分納入考量，編譯器就可以進行優化調整，使得 JavaScript 執行環境更快且更安全:
- 變數必須宣告
- 函式參數必須是唯一的名稱
- 禁止使用 with 敘述
- 對唯讀的特性指派特性值會拋出錯誤
- 八進制數值如 00740 會產生語法錯誤
- 企圖以 delete 刪除不可刪除的特性會拋出錯誤
- delete prop 是一個語法錯誤，而不是預期的 delete global.prop
- eval 不會將新的變數加入至它周圍的作用域
- eval 和 arguments 無法被繫結或指派
- arguments 不能夠追蹤方法參數的變更調整
- arguments.callee 已不在支援，會拋出 TypeError
- arguments.caller 已不在支援，會拋出 TypeError
- 在執行方法時所傳入作為 this 的資訊不會被「封裝」至 Object 物件中
- 無法再使用 fn.caller 和 fn.arguments 來存取 JavaScript 堆疊
- 保留字 (如: protected. static. interface 等) 無法被繫結
 */
