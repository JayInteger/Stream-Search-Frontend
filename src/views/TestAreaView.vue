<template>
  <div>
    <Navbar/>
    <h1>AllTodos</h1>
    <button @click="newTodo()">New Todo</button>
    <br>
    <input type="text" placeholder="Author" v-model="state.newAuthor">
    <span>Test: {{state.newAuthor}}</span>
    <br>
    <input type="text" placeholder="Todo" v-model="state.newTodoItem">
    <span>Test: {{state.newTodoItem}}</span>

    <br>

    <div v-for="item in state.todos" :key="item.author">
        <h4>
            {{item.author}}
        </h4>
        <h4>
            {{item.todo}}
        </h4>
        <button @click="deleteTodo(item._id)">delete Todo</button>
        <button @click="editTodo(item._id)">edit Todo</button>

        
    </div>
    <button @click="createUser">Create User</button>
    <Footer/>
  </div>
</template>

<script>
import { onMounted} from 'vue'
import Navbar from "@/components/TheNavbar.vue"
import Footer from "@/components/TheFooter.vue"
import todocrud from "@/modules/todocrud.js"
export default {
    name:"TestAreaView",
    components: {Navbar,Footer},
    data(){
        return {

        }
    },
    setup() {
        const { state, GetAllTodos, newTodo, deleteTodo,editTodo} = todocrud()
        // function GetAll() {
        //     axios.get('http://localhost:3000/todos')
        //     .then(res => 
        //         {console.log(res.data[0]);
        //         state.todos = res.data;}
        //     )
        //     .catch()
        // }
        onMounted(() => {
            GetAllTodos();
        })
        
        return {state, GetAllTodos, newTodo, deleteTodo,editTodo}
    },
    methods:{
        createUser(){
            const user = {
    "username": "SuperFreak",
    "firstname": "Hans",
    "lastname": "Meier",
    "age": "55",
    "email": "blabla@gmx.de",
    "registered": "12.11.2022",
    "favoriteGenres": ["Horror","Adventure"],
    "role": "admin",
    "desc": "Super Typ",
    "avatar": "keins",
    "lang": "ger",
    "abos": ["Disney+","Prime","Netflix"],
    "favoriteMovieIds": [],
    "alreadySeenMovieIds": [],
    "wantToWatchMovieIds": []
  }
            this.$store.dispatch("createUser", user)
        }
    }
}
</script>

<style scoped>

</style>