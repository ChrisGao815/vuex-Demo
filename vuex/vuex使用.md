##
https://vuex.vuejs.org/zh-cn/intro.html


1.Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。

应用场景

1. 多个视图依赖于同一状态。就路由跳转参数过多，可以考虑使用vuex
2. 来自不同视图的行为需要变更同一状态。

###

vuex 里面有什么东西

state:
muatations:只能由他修改 state
actions：执行异步操作的时候，需要使用，再有actions触发mutation进行状态修改
getters：

### 安装vuex

    cnpm install vuex --save

### 引入和使用


        import Vuex from 'vuex';
        Vue.use(vuex);

### 基本使用

        const store = new Vuex.Store({
            <!-- 状态仓库 -->
          state: {
            count: 0
          },
          //同步修改的方法库
          mutations: {
            increment (state) {
              state.count++
            },
            reduce(state,num){//num是自定义的参数
                state.count-= num;
            }
          }
        })
        //通过commit方法可以调用mutation中的方法来修改 状态
        store.commit('increment')

        store.commit('reduce',5);

        console.log(store.state.count) // -> 1




#### getter 你可以把它理解为 vuex 的 computed
