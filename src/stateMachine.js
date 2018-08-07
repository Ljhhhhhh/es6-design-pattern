import StateMachine from 'javascript-state-machine'
import $ from 'jquery'
// class State {
//   constructor(color) {
//     this.color = color
//   }
//   handle(context) {
//     console.log(`turn to ${this.color} light`)
//     context.seState(this)
//   }
// }

// class Context {
//   constructor() {
//     this.state = null
//   }
//   getState() {
//     return this.state
//   }
//   seState(state) {
//     this.state = state
//   }
// }

// let context = new Context()

// let green = new State('green')
// let yellow = new State('yellow')
// let red = new State('red')

// green.handle(context)
// console.log(context.getState())
// yellow.handle(context)
// console.log(context.getState())
// red.handle(context)
// console.log(context.getState())

let fsm = new StateMachine({
  init: '收藏',
  transitions: [{
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    onDoStore: function () {
      alert('收藏成功')
      updateText()
    },
    onDeleteStore: function () {
      alert('已经取消收藏')
      updateText()
    }
  }
})

let $btn = $('#btn1')
$btn.click(function () {
  if (fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})

function updateText() {
  $btn.text(fsm.state)
}

// 初始化文案
updateText()