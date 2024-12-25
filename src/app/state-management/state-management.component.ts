import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../state-mgmt/todo.model';
import * as TodoActions from '../state-mgmt/todo.actions';
import { selectAllTodos, selectLoading } from '../state-mgmt/todo.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.scss']
})
export class StateManagementComponent {
  todos$: Observable<Todo[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store, private readonly router: Router) {
      this.todos$ = this.store.select(selectAllTodos);
      this.loading$ = this.store.select(selectLoading);
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
      this.store.dispatch(TodoActions.loadTodos());
  }

  toggleTodo(id: string): void {
      this.store.dispatch(TodoActions.toggleTodo({ id }));
  }
}
