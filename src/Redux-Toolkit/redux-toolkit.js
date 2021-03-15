import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        item: "Task 1",
        isComplete: false,
        editting: false
    },
];


const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        editting: (state, { payload }) => {
            const todoToEdit = state.find(todo => todo.id === payload.id);
            todoToEdit.editting = !todoToEdit.editting;
        },
        edit: (state, { payload }) => {
            const todoToEdit = state.find(todo => todo.id === payload.id);
            if (todoToEdit) todoToEdit.item = payload.item;
        },
        update: (state, { payload }) => {
            const todoToEdit = state.find(todo => todo.id === payload.id);
            if (todoToEdit) todoToEdit.isComplete = !todoToEdit.isComplete;

        },
        add: (state, { payload }) => {
            if (payload)
                state.push(payload)
        }


    }
})

export const {
    add,
    editting,
    edit: editItem,
    update: updateStatus
} = todoSlice.actions;

export default configureStore({
    reducer: todoSlice.reducer
})
