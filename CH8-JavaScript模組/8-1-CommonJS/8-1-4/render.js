module.exports = function render (template, model) {
  // require 不一定要放在最頂端，可以放在任何位置
  return require(`./views/${template}.js`)(model)
}
