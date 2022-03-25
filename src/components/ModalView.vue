<template>
    <div>
        <input type="text"
        placeholder="제목입력"
        v-model="todo.modalTitle">
        <input type="text"
        placeholder="상세 내용 입력"
        v-model="todo.modalDesc">
        <button type="button" @click="setTodo">확인</button>
    </div>
</template>

<script>
export default {
    name : "ModalView",
    data () {
        return {
            todo : {
                modalTitle : '',
                modalDesc : '',
                repairStatus : false
            }
        }
    },
    methods : {
        setTodo() {
            this.$store.commit('setTodo', this.todo);
        }
    }
}
</script>

<style>

</style>