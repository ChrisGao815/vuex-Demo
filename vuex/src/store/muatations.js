import state from './state.js'
export default {
    increment(state,num){
        state.count += num;
    },
    reduce(state,num){
        state.count -= num;
    },
    addgoods(state,obj){
        state.goodsList.push(obj);
    }
}
