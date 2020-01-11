// (ES5) 換行字元
var escaped =
'The first line\n\
A second line\n\
Then a third line'

// (ES5) 字串連接
var concatenated =
'The first line\n' +
'A second line\n' +
'Then a third line'

// (ES5) 陣列串接
var joined = [
  'The first line',
  'A second line',
  'Then a third line'
].join('\n')


var multiline =
  `The first line
A second line
Then a third line`
console.log(multiline)


var book = {
  title: 'Modular ES6',
  excerpt: 'Here goes some properly sanitized HTML',
  tags: ['es6', 'template-literals', 'es6-in-depth']
}
// 字串樣板不會保留空白，會保留縮排 (巢狀則不一定)
var html = `<article>
  <header>
    <h1>${book.title}</h1>
  </header>
  <section>${book.excerpt}</section>
  <footer>
    <ul>
      ${
  book.tags
    .map(tag => `<li>${tag}</li>`)
    .join('\n      ')
}
    </ul>
  </footer>
</article>`
/*
<article>
  <header>
    <h1>Modular ES6</h1>
  </header>
  <section>Here goes some properly sanitized HTML</section>
  <footer>
    <ul>
      <li>es6</li>
      <li>template-literals</li>
      <li>es6-in-depth</li>
    </ul>
  </footer>
</article>
 */


// 字串樣板的缺點: 會保留縮排
function getParagraph () {
  return `
    Dear Rod,

    This is a template literal string that's indented
    four spaces. However, you may have expected for it
    to be not indented at all.

    Nico
  `
}

console.log(getParagraph())
/*
    Dear Rod,

    This is a template literal string that's indented
    four spaces. However, you may have expected for it
    to be not indented at all.

    Nico
 */

// 透過工具函式移除換行符號 (不理想)
function unindent (text) {
  return text
    .split('\n')
    .map(line => line.slice(4))
    .join('\n')
    .trim()
}

console.log(unindent(getParagraph()))
/*
Dear Rod,

This is a template literal string that's indented
four spaces. However, you may have expected for it
to be not indented at all.

Nico
 */
