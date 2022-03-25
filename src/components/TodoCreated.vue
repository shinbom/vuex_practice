<template>
    <footer>
        <button type="button" @click="createTodo">생성</button>
    </footer>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    name : 'TodoCreated',
    methods : {
        ...mapMutations(['createTodo'])
    }
}
</script>

<style scoped>
footer { background-color:#000;}
button{display:block; width:150px; height:30px; margin:0 auto;;}
</style>