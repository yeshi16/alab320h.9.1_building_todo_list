
function AddTodo(todos, setTodos, addTodo, setAddTodo) {

    setTodos([{text: addTodo, complete: false}, ...todos ])
    setAddTodo('')
}

export default AddTodo