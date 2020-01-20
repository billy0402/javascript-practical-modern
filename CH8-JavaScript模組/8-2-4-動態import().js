// 靜態載入多國語言模組
import localizationService from './localizationService.js'
// 動態載入該國資料
import(`./localizations/${navigator.language}.json`)
  .then(module => localizationService.use(module))
/*
動態載入缺點:
- 靜態分析於建置階段就執行，不可能參考到動態插入值
- 不容易被 JavaScript 包裹器打包，模組也許會以非同步方式載入，但應用程式的各個區塊均已載入完成
- 無法利用如 Rollup 的工具程式，移除程式碼中，未被引用也從未被使用的模組程式，減少需包裹的程式碼以增進效能
- 無法利用 eslint-plugin-import 或類似工具來幫助判斷模組匯入敘述中的檔案是否存在
 */


// 透過 Promise，以非同步載入非關鍵 (noncritical) 模組，且不阻擋頁面內容載入
import('./vendor/jquery.js')
  .then($ => {
    // 使用 jQuery
  })
  .catch(() => {
    // 無法載入 jQuery
  })


// 利用 Promise.all 以非同步載入多個模組
const specifiers = [
  './vendor/jquery.js',
  './vendor/backbone.js',
  './lib/util.js'
]
Promise.all(specifiers.map(specifier => import(specifier)))
  // 利用解構賦值命名模組
  .then(([$, backbone, , util]) => {
    // 使用模組
  })


// 利用同步迴圈或 async/await 非同步載入模組
async function load () {
  const { map } = await import('./vendor/jquery.js')
  const $ = await import('./vendor/jquery.js')
  const response = await fetch('/cats')
  const cats = await response.json()
  $('<div>')
    .addClass('container cats')
    .html(map(cats, cat => cat.htmlSnippet))
    .appendTo(document.body)
}

load()

/*
import 只是類似函式，語法與一般函式不同，無法延伸，也無法指定特性，也無法進行解構賦值。
import() 則類似 super() 這類函式，可以在類別建構子中使用。
 */
