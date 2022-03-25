<template>
  <div id="app">
    <header-section></header-section>
    <todo-list></todo-list>
    <todo-created></todo-created>
    <modal-view v-if="modalStatus"></modal-view>
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import TodoList from './components/TodoList.vue';
import TodoCreated from './components/TodoCreated.vue';
import ModalView from './components/ModalView.vue';
import {mapState} from 'vuex';

export default {
  name: 'App',
  components: {
    HeaderSection,
    TodoList,
    TodoCreated,
    ModalView
  },
  created () {
    this.$store.commit('getTodo');
  },
  computed : {
    ...mapState(['modalStatus'])
  }
}
</script>

<style>
</style>
