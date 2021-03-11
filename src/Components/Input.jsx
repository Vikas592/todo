import React, { useState } from 'react'
import './Input.css'

function Input({ setTodos }) {

    const [newItem, setNewItem] = useState("")
    const handleChange = (event) => {
        setNewItem(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItem !== "") {
            setTodos((prevTodos) => [...prevTodos, {
                id: Date(),
                item: newItem
            }]);
            setNewItem("")
        }
    }
    return (
        <form>
            <input type="text" placeholder="To Do" value={newItem} onChange={handleChange} />
            <button onClick={handleSubmit}><i className="fas fa-plus"></i></button>
        </form>
    )
}

export default Input
