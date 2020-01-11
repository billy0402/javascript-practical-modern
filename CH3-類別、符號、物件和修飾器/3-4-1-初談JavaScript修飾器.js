/*
(O) @decorators.isFrozen()
(O) @decorators.isFrozen(true)
(X) @decorators().frozen()
(X) @decorators['frozen']
 */


// 在 class 加入修飾器
// 類別宣告
@inaninate
class Car {
}

@expensive
@speed('fast')
class Lamborghini extends Car {
}

class View {
  // 類別成員宣告
  @throttle(200) // 最多每隔 200 ms 便會呼叫 reconcile 一次
  reconcile () {
  }
}


// 成員描述器 (member descriptors) 介面
// interface MemberDescriptor {
//   kind: 'Property'
//   key: string,
//   isStatic: boolean,
//   descriptor: PropertyDescriptor,
//   extras?: MemberDescriptor[]
//   finisher?: (constructor): void;
// }

// 成員描述器 (member descriptor functions)
function readOnly ({ descriptor, ...rest }) {
  return {
    ...rest,
    // 特性描述器 (property descriptors)
    descriptor: {
      ...descriptor,
      writable: false
    }
  }
}

/*
ctor: 修飾類別建構子
heritage: 繼承的父類別
members: 修飾類別的成員描述器陣列
 */
function readOnlyMembers (ctor, heritage, members) {
  // 透過 readOnly 修飾每個成員描述器
  return members.map(member => readOnly(member))
}
