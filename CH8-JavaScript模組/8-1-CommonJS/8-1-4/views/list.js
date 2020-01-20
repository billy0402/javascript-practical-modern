const renderItem = require('./item.js')

module.exports = model => `<ul>
    ${model.map(renderItem).join('\n')}
</ul>`
