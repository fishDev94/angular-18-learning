import { createReducer, on } from "@ngrx/store";
import { addTask, deleteTask, updateTask, resetTodoList } from "./todo.actions";

export type Task = {
    id: string;
    text: string;
}
type TodoList = Task[]

export const initialState: TodoList = []

export const todoReducer = createReducer(
    initialState,
    on(addTask, (state, { task } ) => [...state, task]),
    on(deleteTask, (state, { id }) => state.filter(item => item.id !== id)),
    on(resetTodoList, () => [])
)