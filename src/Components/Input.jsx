/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Redux-Toolkit/redux-toolkit';
import './Input.css';

function Input() {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState('');

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem !== '') {
      dispatch(add({
        id: Date() + newItem,
        item: newItem,
        isComplete: false,
      }));
      setNewItem('');
    }
  };
  return (
    <form>
      <input type="text" placeholder="To Do" value={newItem} onChange={handleChange} />
      <button
        onClick={handleSubmit}
      >
        <i className="fas fa-plus" />
      </button>
    </form>
  );
}

export default Input;
