const renderList = require('./views/list.js')
const html = renderList([
  {
    name: 'Banana bread',
    amount: 3
  },
  {
    name: 'Chocolate chip muffin',
    amount: 2
  }
])
console.log(html)
/*
<ul>
    <li>
        <span>3</span>
        <span></span>
        <span>Banana bread</span>
    </li>
    <li>
        <span>2</span>
        <span></span>
        <span>Chocolate chip muffin</span>
    </li>
</ul>
 */
