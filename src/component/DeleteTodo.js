
function DeleteTodo(todos, setTodos, i) {

    if(!todos[i].complete){
        return
    }
    const filteredTodo = todos.filter((_, oldI)=> oldI !== i)
    setTodos(filteredTodo)
   
}

export default DeleteTodo