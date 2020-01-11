function isItTwo (value) {
  if (value === 2) {
    var two = true
  }

  return two
}

isItTwo(2)
// <- true
isItTwo('two')
// <- undefined


// 變數提升後 (Hosting)
function isItTwo (value) {
  var two

  if (value === 2) {
    var two = true
  }

  return two
}
