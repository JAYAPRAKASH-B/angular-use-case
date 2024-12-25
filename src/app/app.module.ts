import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state-mgmt/todo.effects';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state-mgmt/todo.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from './shared/shared.module';
import { SampleModule } from './sample/sample.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import Angular Forms
import { MatInputModule } from '@angular/material/input'; // Material Input
import { MatButtonModule } from '@angular/material/button'; // Material Button
import { MatFormFieldModule } from '@angular/material/form-field'; // Material Form Field
import { MatSelectModule } from '@angular/material/select';
import { UserFormComponent } from './user-form/user-form.component';
import { HomeComponent } from './home/home.component'; // Material Select
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    StateManagementComponent,
    UserFormComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoReducer}),
    EffectsModule.forRoot([TodoEffects]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    SharedModule,
    SampleModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    SampleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
