
function CompleteCheck (todos, setTodos, i) {
    const allTodos = [...todos]
    allTodos[i].complete = !allTodos[i].complete
    setTodos(allTodos)
}

export default CompleteCheck