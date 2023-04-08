import axios from 'axios'
import {ref} from 'vue';

const getTodos = () => {
    const state = ref({
        // name: "Sideshow Bob",
        newAuthor: '',
        newTodoItem: '',
        todos: {

        }
    })
    const GetAllTodos = async () => {
        try {
            await axios.get('http://localhost:3000/todos')
            .then(res => 
                {console.log(res.data[0]);
                state.value.todos = res.data;}
            )
            
        }
        catch(error){
            console.log(error)
        }
    }
    const newTodo = () => {
        // const requestOptions = {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         //'auth token': state.token
        //     },
        //     body: JSON.stringify({
        //          author:state.value.newAuthor,
        //          todo: state.value.newTodoItem
        //     })
        // }
        const content = {
            author:state.value.newAuthor,
            todo: state.value.newTodoItem
        }
        axios.post('http://localhost:3000/todos/new', content)
        // .then(resp)
    }
    const deleteTodo = (_id) => {
        axios.delete('http://localhost:3000/todos/delete/'+_id)
        .then(() => {})
        // .then(resp)
    }
    const editTodo = (_id) => {
        
        axios.put('http://localhost:3000/todos/update/'+_id)
        .then((res) => {
            console.log(res);
        })
        // .then(resp)
    }

    return {state, GetAllTodos, newTodo, deleteTodo,editTodo}

}
export default getTodos;