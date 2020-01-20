const render = require('./render.js')
console.log(render('item', {
  name: 'Banana bread',
  amount: 3
}))
/*
<li>
    <span>3</span>
    <span></span>
    <span>Banana bread</span>
</li>
 */
console.log(render('list', [
  {
    name: 'Apple pie',
    amount: 2
  },
  {
    name: 'Roasted almond',
    amount: 25
  }
]))
/*
<ul>
    <li>
        <span>2</span>
        <span></span>
        <span>Apple pie</span>
    </li>
    <li>
        <span>25</span>
        <span></span>
        <span>Roasted almond</span>
    </li>
</ul>
 */
