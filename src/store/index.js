import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList : [],
    modal : {
      title : '',
      desc : ''
    },
    modalStatus : false,
  },
  mutations: {
    getTodo(state) {
      const todoListItem = JSON.parse(window.localStorage.getItem('todoList'));
      if(todoListItem !== null) {
        state.todoList = todoListItem;
        // 수정 초기화
        state.todoList.forEach((item) => {
          item.repairStatus = false;
        });
      }
    },
    createTodo (state) {
      return state.modalStatus = true;
    },
    removeTodo (state, payload) {
      state.todoList.splice(payload, 1);
      window.localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    repairTodo(state, payload) {
      let current_index = payload.index;
      if(state.todoList[current_index].repairStatus == true) {
        // 확인을 눌렀을 때 
        state.todoList[current_index].repairStatus =  false;
        window.localStorage.setItem('todoList', JSON.stringify(state.todoList));
      } else{ 
        // 수정을 눌렀을 떄
        state.todoList[current_index].repairStatus =  true;
      }
    },
    setTodo(state, payload) {
      state.todoList.push(payload);
      window.localStorage.setItem('todoList', JSON.stringify(state.todoList));
      state.modal.title = '';
      state.modal.desc = '';
      state.modalStatus = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
