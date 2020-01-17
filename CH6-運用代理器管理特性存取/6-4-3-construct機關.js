const handler = {
  // 實作自訂的 construct 機關
  // 箭頭函式無法用於建構子，construct 機關也無法用於箭頭函式上
  construct (Target, args) {
    // 與 return new Target(...args) 效果相同
    return Reflect.construct(Target, args)
  }
}


const handler = {
  // 透過建構子在目標實體宣告一個 name 特性
  construct (Target, args) {
    const [name] = args
    const target = Reflect.construct(Target, args)
    target.name = name

    return target
  }
}

class Target {
  hello () {
    console.log(`Hello, ${this.name}!`)
  }
}

// 原始 API
const target = new Target()
target.name = 'Nicolás'
target.hello()
// <- 'Hello, Nicolás!'

// 代理器
const ProxiedTarget = new Proxy(Target, handler)
const proxy = new ProxiedTarget('Nicolás')
proxy.hello()
// <- 'Hello, Nicolás!'
