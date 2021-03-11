import React, { useState } from 'react'
import "./Item.css"


function Item({ todo, setTodos }) {
    const [done, setDone] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleDelete = () => {
        if (done) {
            setDone(false)
            setEdit(false)
        }
        else setDone(true)
    }
    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleChange = (event) => {
        const newTodo = { id: todo.id, item: event.target.value };
        setTodos((prevTodos) => [...prevTodos.filter(todoItem => todoItem.id !== todo.id), newTodo]);
        todo = newTodo
    }
    return (
        <div className="todoItem">
            <div className="todo-text" >
                <i className="fas fa-notes-medical" style={{ color: "#4285F4" }}></i>
                {done ?
                    <p style={{ textDecoration: "line-through" }}>{todo.item}</p>
                    :
                    edit
                        ?
                        <input value={todo.item}
                            onChange={handleChange}
                            autoFocus={true}
                        />
                        :
                        <p  >{todo.item}</p>
                }
            </div>

            <button className="buttons" disabled={done} onClick={handleEdit}>{edit ? <i className="fas fa-check"></i> : <i className="fas fa-pencil-alt"></i>}</button>
            <button className="buttons" onClick={handleDelete} >{done ? <i className="fas fa-undo"></i> : <i className="fas fa-trash-alt"></i>}</button>
        </div>
    )
}

export default Item
