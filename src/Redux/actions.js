import { ADD_TODO, EDIT_TODO, UPDATE_STATUS } from "./Contants";

export const add = (newItem) => ({
    type: ADD_TODO,
    payload: newItem
});

export const editItem = (id, item) => ({
    type: EDIT_TODO,
    payload: { id, item }
})

export const updateStatus = (id) => ({
    type: UPDATE_STATUS,
    payload: { id }
})
