import React, { useState } from 'react'
import "./Item.css"


function Item({ todo, setTodos }) {

    const [edit, setEdit] = useState(false)

    const handleDelete = () => {
        if (!todo.isComplete) {
            setEdit(false)
        }
        setTodos((prevTodos) => [...prevTodos.map(todoItem => {
            if (todoItem.id === todo.id)
                return {
                    id: todo.id,
                    item: todo.item,
                    isComplete: todo.isComplete ? false : true
                }
            return todoItem;
        })])

    }
    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleChange = (event) => {
        setTodos((prevTodos) => [...prevTodos.map(todoItem => {
            if (todoItem.id === todo.id) todoItem.item = event.target.value;
            return todoItem
        })]);

        console.log(todo)
    }
    return (
        <div className="todoItem">
            <div className="todo-text" >
                <i className="fas fa-notes-medical" style={{ color: "#4285F4" }}></i>
                {todo.isComplete ?
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

            <button className="buttons" disabled={todo.isComplete} style={{ backgroundColor: todo.isComplete ? "grey" : "#4285f4" }} onClick={handleEdit}>{edit ? <i className="fas fa-check"></i> : <i className="fas fa-pencil-alt"></i>}</button>
            <button className="buttons" onClick={handleDelete} >{todo.isComplete ? <i className="fas fa-undo"></i> : <i className="fas fa-trash-alt"></i>}</button>
        </div>
    )
}

export default Item
