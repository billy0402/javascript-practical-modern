// 實作迭代分割字元符號叢集 (grapheme segments)
// 解決字串內容含有 emoji 符號 或 其他連結編碼單元 的分割問題
function getGraphemes (locale, text) {
  // 建立切割器實例，指定語言類型 (locale) 和
  // 解析程度 (granularity level): 以字元. 符號. 單字. 句子或行進行分割
  const segmenter = new Intl.Segmenter(locale, {
    granularity: 'grapheme'
  })
  // 切割器實例會產生一個迭代器
  // 依據解析程度將輸入字串進行分割，演算法隨語言類型而改變
  const sequence = segmenter.segment(text)
  // 產生字元叢集陣列
  const graphemes = [...sequence].map(item => item.segment)

  return graphemes
}

getGraphemes('es', 'Esto está bien bueno!')
