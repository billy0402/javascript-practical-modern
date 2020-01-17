const validations = new Map()
const validator = {
  set (target, key, value) {
    if (validations.has(key)) {
      validations.get(key)(value)
    }

    return Reflect.set(target, key, value)
  }
}
validations.set('age', validateAge)

function validateAge (value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError('Age must be a number')
  }

  if (value <= 0) {
    throw new TypeError('Age must be a positive number')
  }

  return true
}

const person = {}
const proxy = new Proxy(person, validator)
// proxy.age = 'twenty three'
// <- TypeError: Age must be a number
// proxy.age = NaN
// <- TypeError: Age must be a number
// proxy.age = 0
// <- TypeError: Age must be a positive number
proxy.age = 28
console.log(person.age)
// <- 28
