// ES5
var emitter = {
  events: {},
  // 註冊事件監聽器
  on: function (type, fn) {
    if (this.events[type] === undefined) {
      this.events[type] = []
    }
    this.events[type].push(fn)
  },
  // 喚起事件
  emit: function (type, event) {
    if (this.events[type] === undefined) {
      return
    }
    this.events[type].forEach(function (fn) {
      fn(event)
    })
  }
}


var emitter = {
  events: {},
  // 註冊事件監聽器
  on (type, fn) {
    if (this.events[type] === undefined) {
      this.events[type] = []
    }
    this.events[type].push(fn)
  },
  // 喚起事件
  emit (type, event) {
    if (this.events[type] === undefined) {
      return
    }
    this.events[type].forEach(function (fn) {
      fn(event)
    })
  }
}
