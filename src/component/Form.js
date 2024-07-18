import { useState } from "react";

function Form() {

    const [todos, setTodos] = useState([
        { text: 'todo 1', complete: false },
        { text: 'todo 2', complete: true }
    ])
    const [addTodo, setAddTodo] = useState('')
    const [editTodo, setEditTodo] = useState('')


    return (
        <div>
            <h1>todo List</h1>
            <div>
                <input
                    type='text'
                    value={addTodo}
                    placeholder="Add todo"
                    onChange={(e) => { setAddTodo(e.target.value) }}
                />
                <button>Add</button>
            </div>

            <div>
                <ul>

                    {
                        todos.map((todo, i) => (
                            <>
                                <li>
                                    <input
                                        type='checkbox'
                                        checked={todo.complete}
                                    />
                                    {todo.text}
                                    <button> Edit </button>
                                    <button disabled={!todo.complete}> Delete </button>
                                </li>
                            </>
                        ))

                    }

                </ul>
            </div>

            <div>
                <input
                    type='checkbox'
                />
                <input
                    type='text'
                    value={editTodo}
                    placeholder="Add todo"
                    onChange={(e) => { setEditTodo(e.target.value) }}
                />
                <button>Save</button>
            </div>
        </div>

    )
}

export default Form