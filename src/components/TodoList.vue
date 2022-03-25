<template>
    <div>
        <ul>
            <li v-for="(list, index) in todoList" :key="index">
                <p>
                    <strong>Title</strong>
                    <!-- 수정할 때 나타남 -->
                    <input type="text" v-model="list.modalTitle" v-if="list.repairStatus" >
                    <!-- 완료 -->
                    <span v-else>{{list.modalTitle}}</span>
                </p>
                <p>
                    <strong>Desc</strong>
                    <!-- 수정할 때 나타남 -->
                    <input type="text" v-model="list.modalDesc" v-if="list.repairStatus">
                    <!-- 완료 -->
                    <span v-else>{{list.modalDesc}}</span>
                </p>
                <button type="button" @click="repairTodo(list, index)">
                    <span v-if="list.repairStatus">확인</span>
                    <span v-else>수정</span>
                </button>
                <button type="button" @click="removeTodo(index)">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    computed : {
        ...mapState(['todoList'])
    },
    methods : {
        repairTodo(list, index) {
            this.$store.commit('repairTodo', {list,index});
        },
        removeTodo(index) {
            this.$store.commit('removeTodo', index);
        },
    }
}
</script>

<style>
strong{margin-right:10px;}
</style>