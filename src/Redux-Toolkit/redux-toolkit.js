import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = [
    {
        id: Date() + "Task 1",
        item: "Task 1",
        isComplete: false,
    },
];


const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {

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
    edit: editItem,
    update: updateStatus
} = todoSlice.actions;

export default configureStore({
    reducer: todoSlice.reducer
})
