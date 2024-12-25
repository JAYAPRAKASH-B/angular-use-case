import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todo.model';

export const selectTodoState = createFeatureSelector<TodoState>('todos');
export const selectAllTodos = createSelector(selectTodoState, (state) => state.todos);
export const selectLoading = createSelector(selectTodoState, (state) => state.loading);
export const selectError = createSelector(selectTodoState, (state) => state.error);
