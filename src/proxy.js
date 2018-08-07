let star = {
  name: 'ljh',
  age: 24,
  phone: 'star:13216698987'
}

let agent = new Proxy(star, {
  get: function (target, key) {
    if (key === 'phone') {
      return 'agent:12121212'
    }
    if (key === 'price') {
      return 120
    }
    return target[key]
  },
  set: function (target, key, val) {
    if (key === 'customPrice') {
      if (val < 100) {
        throw new Error('价格太低')
      } else {
        target[key] = val
        return true
      }
    }
  }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
agent.customPrice = 150
console.log(agent.customPrice)