import { createAction, props } from "@ngrx/store";
import { Task } from "./todo.reducers";

export const addTask = createAction('[Todo Component] addTask', props<{ task: Task}>());
export const updateTask = createAction('[Todo Component] updateTask');
export const deleteTask = createAction('[Todo Component] deleteTask', props<{ id: string }>());
export const resetTodoList = createAction('[Todo Component] resetTodoList');