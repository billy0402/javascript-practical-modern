const renderItem = require('./views/item.js')
const html = renderItem({
  name: 'Banana bread',
  amount: 3
})
console.log(html)
/*
<li>
    <span>3</span>
    <span></span>
    <span>Banana bread</span>
</li>
 */
