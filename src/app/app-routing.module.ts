import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateManagementComponent } from './state-management/state-management.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: "todo-state", component: StateManagementComponent
  },
  { path: 'pipe-directive', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule) },
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'user-form', component: UserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
