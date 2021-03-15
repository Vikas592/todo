import React, { useState } from 'react'
import "./Item.css"
import { useDispatch } from 'react-redux'
import { editItem, updateStatus, editting } from '../Redux-Toolkit/redux-toolkit';

function Item({ todo }) {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(updateStatus({ id: todo.id }))
    }
    const handleEdit = () => {
        dispatch(editting({ id: todo.id }))
    }

    const handleChange = (event) => {
        dispatch(editItem(
            { id: todo.id, item: event.target.value }
        ))

    }
    return (
        <div className="todoItem">
            <div className="todo-text" >
                <i className="fas fa-notes-medical" style={{ color: "#4285F4" }}></i>
                {todo.isComplete ?
                    <p style={{ textDecoration: "line-through" }}>{todo.item}</p>
                    :
                    todo.editting
                        ?
                        <input value={todo.item}
                            onChange={handleChange}
                            autoFocus={true}
                        />
                        :
                        <p  >{todo.item}</p>
                }
            </div>

            <button className="buttons" disabled={todo.isComplete} style={{ backgroundColor: todo.isComplete ? "grey" : "#4285f4" }} onClick={handleEdit}>{todo.editting ? <i className="fas fa-check"></i> : <i className="fas fa-pencil-alt"></i>}</button>
            <button className="buttons" onClick={handleDelete} >{todo.isComplete ? <i className="fas fa-undo"></i> : <i className="fas fa-trash-alt"></i>}</button>
        </div>
    )
}

export default Item
