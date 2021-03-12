import { ADD_TODO, EDIT_TODO, UPDATE_STATUS } from "./Contants";

const initialState = [
    {
        id: Date(),
        item: "Task 1",
        status: "pending"
    }];

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case EDIT_TODO:
            return [...state.map(todo => {
                if (todo.id === action.payload.id)
                    todo.item = action.payload.item
                return todo;
            })
            ];
        case UPDATE_STATUS:
            return [...state.filter(todo => todo.id !== action.payload.id), { id: action.payload.id, item: action.payload.item, status: action.payload.status }]
        default:
            return state
    }
}

