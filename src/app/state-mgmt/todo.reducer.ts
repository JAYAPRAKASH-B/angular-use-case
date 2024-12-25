import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { TodoState } from './todo.model';

export const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
};

export const todoReducer = createReducer(
    initialState,
    on(TodoActions.loadTodos, (state) => ({ ...state, loading: true })),
    on(TodoActions.loadTodosSuccess, (state, { todos }) => ({ ...state, loading: false, todos })),
    on(TodoActions.loadTodosFailure, (state, { error }) => ({ ...state, loading: false, error })),
    on(TodoActions.addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
    on(TodoActions.toggleTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
    }))
);
