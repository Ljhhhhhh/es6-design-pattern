class Adaptee {
  specificRequest() {
    return '插头C标准'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} - 转换器 - 插头A标准`
  }
}

let target = new Target()
let res = target.request()
console.log(res)