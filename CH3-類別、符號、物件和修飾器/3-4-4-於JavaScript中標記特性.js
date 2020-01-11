class Dog {
  @commandProperty('game-master')
  name
}

function commandProperty (writeLevel, readLevel = writeLevel) {
  return ({ key, ...rest }) => ({
    key,
    ...rest,
    finisher (ctor) {
      const symbol = Symbol.for('commandProperties')
      const commandPropertyDescriptor = {
        key,
        readLevel,
        writeLevel
      }
      if (!ctor[symbol]) {
        ctor[symbol] = []
      }
      ctor[symbol].push(commandPropertyDescriptor)
    }
  })
}

function getCommandProperties (ctor) {
  const symbol = Symbol.for('commandProperties')
  const properties = ctor[symbol] || []
  return [...properties]
}

getCommandProperties(Dog)
// <- [{ key: 'name', readLevel: 'game-master',
// writeLevel: 'game-master' }]
