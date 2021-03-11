import React, { useState } from 'react'
import "./Item.css"
import { useDispatch } from 'react-redux'
import { editItem, updateStatus } from '../Redux/actions';

function Item({ todo }) {

    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)

    const handleDelete = () => {
        if (todo.status !== "pending") {
            dispatch(
                updateStatus(todo.id, todo.item, "pending")
            )
            setEdit(false)
        }
        else dispatch(
            updateStatus(todo.id, todo.item, "completed")
        )
    }
    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleChange = (event) => {
        const newTodo = { id: todo.id, item: event.target.value };
        dispatch(editItem(
            todo.id, event.target.value
        ))
        todo = newTodo
    }
    return (
        <div className="todoItem">
            <div className="todo-text" >
                <i className="fas fa-notes-medical" style={{ color: "#4285F4" }}></i>
                {todo.status !== "pending" ?
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

            <button className="buttons" disabled={todo.status !== "pending"} onClick={handleEdit}>{edit ? <i className="fas fa-check"></i> : <i className="fas fa-pencil-alt"></i>}</button>
            <button className="buttons" onClick={handleDelete} >{todo.status !== "pending" ? <i className="fas fa-undo"></i> : <i className="fas fa-trash-alt"></i>}</button>
        </div>
    )
}

export default Item
