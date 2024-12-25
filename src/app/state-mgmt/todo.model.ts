export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
}
