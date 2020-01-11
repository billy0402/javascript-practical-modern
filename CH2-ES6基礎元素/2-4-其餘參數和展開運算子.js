// ES5
function join () {
  var list = Array.prototype.slice.call(arguments)
  return list.join(', ')
}

join('first', 'second', 'third')
// <- first, second, third
