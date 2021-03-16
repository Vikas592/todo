import React, { useState } from 'react'
import "./Item.css"
import { useDispatch } from 'react-redux'
import { editItem, updateStatus } from '../Redux-Toolkit/redux-toolkit';

function Item({ todo }) {
    const [edit, setEdit] = useState(false);

    const [item, setItem] = useState(todo.item);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(updateStatus({ id: todo.id }))
    }
    const handleEdit = () => {
        setEdit(!edit)
        if (item) {
            dispatch(editItem(
                { id: todo.id, item }
            ))
        }
        else setItem(todo.item);
    }

    const handleChange = (event) => {
        setItem(event.target.value);

    }
    return (
        <div className="todoItem">
            <div className="todo-text" >
                {todo.isComplete ? <i className="fas fa-check" style={{ color: "#4285F4" }}></i> :
                    <i className="fas fa-notes-medical" style={{ color: "#4285F4" }}></i>}
                {todo.isComplete
                    &&
                    <p style={{ textDecoration: "line-through" }}>{todo.item}</p>
                }
                {!todo.isComplete
                    &&
                    edit
                    &&
                    <input value={item}
                        onChange={handleChange}
                        autoFocus={true}
                    />}

                {!todo.isComplete
                    &&

                    !edit
                    &&
                    <p  >{todo.item}</p>
                }

            </div>

            <button
                className="buttons"
                disabled={todo.isComplete}
                style={{ backgroundColor: todo.isComplete ? "grey" : "#4285f4" }}
                onClick={handleEdit}>
                {edit && !todo.isComplete
                    ?
                    <i className="fas fa-check"></i>
                    :

                    <i className="fas fa-pencil-alt"></i>
                }
            </button>
            <button
                className="buttons"
                onClick={handleDelete} >
                {todo.isComplete
                    ?
                    <i className="fas fa-undo"></i>
                    :
                    <i className="fas fa-trash-alt"></i>
                }
            </button>
        </div>
    )
}

export default Item
