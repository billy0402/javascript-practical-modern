var timer = {
  seconds: 0,
  start () {
    setInterval(() => {
      this.seconds++
    }, 1000)
  }
}
timer.start()
setTimeout(function () {
  console.log(timer.seconds)
}, 3500)

// <- 3


function puzzle () {
  return function () {
    console.log(arguments)
    // <- 1, 2, 3 (匿名函式的語彙範圍)
  }
}

puzzle('a', 'b', 'c')(1, 2, 3)


function puzzle () {
  return () => console.log(arguments)
  // <- 'a', 'b', 'c' (puzzle 函式的語彙範圍)
}

puzzle('a', 'b', 'c')(1, 2, 3)
