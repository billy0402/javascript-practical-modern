const random = (function () {
  const calc = n => Math.floor(Math.random() * n)
  const range = (max = 1, min = 0) => calc(max + 1 - min) + min

  return { range } // 公開的 API
})() // 立即函式 (IIFE)


// 模組化，移除模組名稱與立即函式，變成以檔案名稱存在
const calc = n => Math.floor(Math.random() * n)
const range = (max = 1, min = 0) => calc(max + 1 - min) + min
export { range }
