import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './state-mgmt/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Example API endpoint

  constructor(private http: HttpClient) {}

  // Fetch all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  // Add a new todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  // Toggle todo status (mocked for simplicity)
  toggleTodo(id: string): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${id}`, { completed: true });
  }
}
