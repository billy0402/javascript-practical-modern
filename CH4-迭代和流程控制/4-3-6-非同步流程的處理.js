function modelProvider (paths) {
  const g = paths()
  // 非同步下不能以 for...of 巡訪
  pull()

  function pull (data) {
    const { value, done } = g.next(data)

    if (done) {
      return
    }

    fetch(`/model?query=${encodeURIComponent(value)}`)
      .then(res => res.json())
      .then(data => pull(data))
      .catch(err => g.throw(err))
  }
}
