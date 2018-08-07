class loginForm {
  constructor() {
    this.state = 'hide'
  }
  show() {
    if (this.state === 'show') {
      alert('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框显示成功');
  }
  hide() {
    if (this.state === 'hide') {
      alert('已经隐藏')
      return
    }
    this.state = 'hide'
    console.log('登录框隐藏成功');
  }
}

loginForm.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new loginForm()
    }
    return instance
  }
})()

let login1 = loginForm.getInstance()
login1.show()
let login2 = loginForm.getInstance()
login2.hide()

console.log('login1 === login2', login1 === login2)